// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

/**
 * @title ArenaVault V2 - Server-Driven Architecture
 * @dev Single-player prediction battles resolved by orchestration server
 * @notice This contract is designed for Pyth hackathon compliance with automated resolution
 */
contract ArenaVaultV2 {
    IPyth public pyth;
    address public owner;
    address public resolver; // The orchestration server wallet

    struct Battle {
        address player;
        uint256 prediction; // Price prediction in Pyth format (price * 10^8)
        bool isHigher; // true = predicts price will go up, false = down
        uint256 stake;
        uint256 startTime;
        uint256 duration;
        bool resolved;
        int64 finalPrice;
        address winner;
        uint256 createdAt;
    }

    struct LuckyGame {
        string gameId; // Server-generated ID
        address player;
        uint256 entryFee;
        uint256 guess;
        uint256 minRange;
        uint256 maxRange;
        uint256 randomNumber;
        bool resolved;
        bool winner; // true if player won, false if lost
        uint256 createdAt;
        uint256 expiresAt;
    }

    Battle[] public battles;
    mapping(string => LuckyGame) public luckyGames;
    string[] public luckyGameIds;

    // Events
    event BattleCreated(uint256 indexed battleId, address indexed player, uint256 prediction, bool isHigher, uint256 stake, uint256 duration);
    event BattleResolved(uint256 indexed battleId, address indexed winner, int64 finalPrice);
    event LuckyGameCreated(string indexed gameId, address indexed player, uint256 entryFee, uint256 guess);
    event LuckyGameResolved(string indexed gameId, address indexed player, uint256 randomNumber, bool winner);
    event ResolverUpdated(address indexed oldResolver, address indexed newResolver);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyResolver() {
        require(msg.sender == resolver, "Not authorized resolver");
        _;
    }

    constructor(address _pythAddress, address /* _entropyAddress */) {
        pyth = IPyth(_pythAddress);
        owner = msg.sender;
        resolver = msg.sender; // Initially owner, can be updated
    }

    /**
     * @dev Set the resolver address (orchestration server)
     * @param _resolver Address of the orchestration server
     */
    function setResolver(address _resolver) external onlyOwner {
        address oldResolver = resolver;
        resolver = _resolver;
        emit ResolverUpdated(oldResolver, _resolver);
    }

    /**
     * @dev Create a single-player prediction battle
     * @param _prediction Price prediction in Pyth format
     * @param _isHigher True if predicting price will go up
     * @param _duration Battle duration in seconds
     */
    function createBattle(uint256 _prediction, bool _isHigher, uint256 _duration) external payable {
        require(msg.value > 0, "Stake required");
        require(_duration >= 60, "Minimum 1 minute duration");
        require(_duration <= 3600, "Maximum 1 hour duration");

        uint256 battleId = battles.length;
        
        battles.push(Battle({
            player: msg.sender,
            prediction: _prediction,
            isHigher: _isHigher,
            stake: msg.value,
            startTime: block.timestamp,
            duration: _duration,
            resolved: false,
            finalPrice: 0,
            winner: address(0),
            createdAt: block.timestamp
        }));

        emit BattleCreated(battleId, msg.sender, _prediction, _isHigher, msg.value, _duration);
    }

    /**
     * @dev Resolve a battle (only callable by resolver/server)
     * @param battleId ID of the battle to resolve
     * @param priceUpdateData Pyth price update data from Hermes
     */
    function resolveBattle(uint256 battleId, bytes[] calldata priceUpdateData)
        external
        payable
        onlyResolver
    {
        require(battleId < battles.length, "Battle does not exist");
        Battle storage battle = battles[battleId];
        require(!battle.resolved, "Already resolved");
        require(block.timestamp >= battle.startTime + battle.duration, "Battle not expired");

        // Update Pyth prices with provided data and pay fee
        uint fee = pyth.getUpdateFee(priceUpdateData);
        require(msg.value >= fee, "Insufficient Pyth fee");
        pyth.updatePriceFeeds{value: fee}(priceUpdateData);

        // Get ETH/USD price after update
        bytes32 priceID = 0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace;
        PythStructs.Price memory price = pyth.getPrice(priceID);
        battle.finalPrice = price.price;

        // Determine winner based on prediction
        bool predictionCorrect = false;
        if (battle.isHigher && price.price > int64(int256(battle.prediction))) {
            predictionCorrect = true;
        } else if (!battle.isHigher && price.price < int64(int256(battle.prediction))) {
            predictionCorrect = true;
        }

        if (predictionCorrect) {
            battle.winner = battle.player;
            // Player wins 2x their stake (original stake + profit)
            payable(battle.player).transfer(battle.stake * 2);
        } else {
            battle.winner = address(0); // House wins
            // Stake goes to contract (house)
        }

        battle.resolved = true;

        // Refund excess Pyth fee to resolver
        if (msg.value > fee) {
            payable(msg.sender).transfer(msg.value - fee);
        }

        emit BattleResolved(battleId, battle.winner, battle.finalPrice);
    }

    /**
     * @dev Create a lucky game (server-managed)
     * @param _gameId Server-generated unique game ID
     * @param _player Player address
     * @param _guess Player's guess
     * @param _minRange Minimum range value
     * @param _maxRange Maximum range value
     * @param _expiresAt Expiration timestamp
     */
    function createLuckyGame(
        string calldata _gameId,
        address _player,
        uint256 _guess,
        uint256 _minRange,
        uint256 _maxRange,
        uint256 _expiresAt
    ) external payable onlyResolver {
        require(bytes(_gameId).length > 0, "Invalid game ID");
        require(_player != address(0), "Invalid player address");
        require(_guess >= _minRange && _guess <= _maxRange, "Guess out of range");
        require(_expiresAt > block.timestamp, "Invalid expiration");
        require(bytes(luckyGames[_gameId].gameId).length == 0, "Game ID already exists");

        luckyGames[_gameId] = LuckyGame({
            gameId: _gameId,
            player: _player,
            entryFee: msg.value,
            guess: _guess,
            minRange: _minRange,
            maxRange: _maxRange,
            randomNumber: 0,
            resolved: false,
            winner: false,
            createdAt: block.timestamp,
            expiresAt: _expiresAt
        });

        luckyGameIds.push(_gameId);

        emit LuckyGameCreated(_gameId, _player, msg.value, _guess);
    }

    /**
     * @dev Resolve a lucky game (only callable by resolver/server)
     * @param _gameId Game ID to resolve
     * @param _randomNumber Generated random number
     */
    function resolveLuckyGame(string calldata _gameId, uint256 _randomNumber) 
        external 
        onlyResolver 
    {
        LuckyGame storage game = luckyGames[_gameId];
        require(bytes(game.gameId).length > 0, "Game does not exist");
        require(!game.resolved, "Already resolved");
        require(block.timestamp >= game.expiresAt, "Game not expired");

        // Normalize random number to range
        uint256 range = game.maxRange - game.minRange + 1;
        uint256 winningNumber = game.minRange + (_randomNumber % range);
        game.randomNumber = winningNumber;

        // Check if player won (exact match)
        if (game.guess == winningNumber) {
            game.winner = true;
            // Player wins 2x their entry fee
            payable(game.player).transfer(game.entryFee * 2);
        } else {
            game.winner = false;
            // Entry fee goes to house
        }

        game.resolved = true;

        emit LuckyGameResolved(_gameId, game.player, winningNumber, game.winner);
    }

    /**
     * @dev Get all battles
     */
    function getAllBattles() external view returns (Battle[] memory) {
        return battles;
    }

    /**
     * @dev Get battle count
     */
    function getBattleCount() external view returns (uint256) {
        return battles.length;
    }

    /**
     * @dev Get lucky game by ID
     */
    function getLuckyGame(string calldata _gameId) external view returns (LuckyGame memory) {
        require(bytes(luckyGames[_gameId].gameId).length > 0, "Game does not exist");
        return luckyGames[_gameId];
    }

    /**
     * @dev Get all lucky game IDs
     */
    function getAllLuckyGameIds() external view returns (string[] memory) {
        return luckyGameIds;
    }

    /**
     * @dev Get lucky game count
     */
    function getLuckyGameCount() external view returns (uint256) {
        return luckyGameIds.length;
    }

    /**
     * @dev Check if battle is expired
     */
    function isBattleExpired(uint256 battleId) external view returns (bool) {
        require(battleId < battles.length, "Battle does not exist");
        Battle storage battle = battles[battleId];
        return block.timestamp >= battle.startTime + battle.duration;
    }

    /**
     * @dev Check if lucky game is expired
     */
    function isLuckyGameExpired(string calldata _gameId) external view returns (bool) {
        require(bytes(luckyGames[_gameId].gameId).length > 0, "Game does not exist");
        return block.timestamp >= luckyGames[_gameId].expiresAt;
    }

    /**
     * @dev Emergency withdraw (owner only)
     */
    function emergencyWithdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    /**
     * @dev Get contract balance
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    /**
     * @dev Receive function to accept ETH
     */
    receive() external payable {}

    /**
     * @dev Fallback function
     */
    fallback() external payable {}
}
