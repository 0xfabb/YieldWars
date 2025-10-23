
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
import "@pythnetwork/entropy-sdk-solidity/IEntropyConsumer.sol";
import "@pythnetwork/entropy-sdk-solidity/IEntropyV2.sol";

contract ArenaVault is IEntropyConsumer {
    IPyth public pyth;
    IEntropyV2 public entropy;

    struct Battle {
        address player1;
        address player2;
        uint256 stake;
        bool resolved;
        int64 prediction1;
        int64 prediction2;
        int64 finalPrice;
        address winner;
    }

    struct LuckyGame {
        uint256 gameId;
        address creator;
        uint256 entryFee;
        uint256 prizePool;
        uint256 minGuess;
        uint256 maxGuess;
        uint256 winningNumber;
        address winner;
        bool isActive;
        bool isSettled;
        uint256 startTime;
        uint256 endTime;
        uint64 sequenceNumber;
        address[] players;
        mapping(address => uint256) playerGuesses;
    }

    struct PlayerGuess {
        address player;
        uint256 guess;
        uint256 timestamp;
    }

    Battle[] public battles;
    LuckyGame[] public luckyGames;
    
    // Mapping from sequence number to game ID for entropy callbacks
    mapping(uint64 => uint256) public sequenceToGameId;
    
    // Events
    event GameCreated(uint256 indexed gameId, address indexed creator, uint256 entryFee);
    event PlayerJoined(uint256 indexed gameId, address indexed player, uint256 guess);
    event GameSettled(uint256 indexed gameId, address indexed winner, uint256 winningNumber);
    event RandomNumberRequested(uint256 indexed gameId, uint64 sequenceNumber);

    constructor(address _pythAddress, address _entropyAddress) {
        pyth = IPyth(_pythAddress);
        entropy = IEntropyV2(_entropyAddress);
    }

    function createBattle(int64 _prediction) external payable {
        // Lock in ETH
        require(msg.value > 0, "Need ETH to battle");

        // For simplicity, first player starts a new battle
        battles.push(Battle({
            player1: msg.sender,
            player2: address(0),
            stake: msg.value,
            resolved: false,
            prediction1: _prediction,
            prediction2: 0,
            finalPrice: 0,
            winner: address(0)
        }));
    }

    function joinBattle(uint256 battleId, int64 _prediction) external payable {
        Battle storage b = battles[battleId];
        require(b.player2 == address(0), "Already full");
        require(msg.value == b.stake, "Stake mismatch");
        b.player2 = msg.sender;
        b.prediction2 = _prediction;
    }
    function resolveBattle(uint256 battleId, bytes[] calldata priceUpdateData) external payable {
        Battle storage b = battles[battleId];
        require(!b.resolved, "Already resolved");
        require(b.player2 != address(0), "Battle not full");

        // Update Pyth prices with provided data
        uint fee = pyth.getUpdateFee(priceUpdateData);
        require(msg.value >= fee, "Insufficient fee for price update");
        pyth.updatePriceFeeds{ value: fee }(priceUpdateData);

        // ETH/USD feed ID
        bytes32 priceID = 0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace;
        PythStructs.Price memory price = pyth.getPriceUnsafe(priceID);
        b.finalPrice = price.price;

        // Calculate closeness
        uint256 diff1 = uint256(uint64(abs(price.price - b.prediction1)));
        uint256 diff2 = uint256(uint64(abs(price.price - b.prediction2)));

        // Calculate total prize (both stakes)
        uint256 totalPrize = b.stake * 2;

        if (diff1 < diff2) {
            b.winner = b.player1;
            payable(b.player1).transfer(totalPrize);
        } else if (diff2 < diff1) {
            b.winner = b.player2;
            payable(b.player2).transfer(totalPrize);
        } else {
            // Tie - refund both players
            b.winner = address(0);
            payable(b.player1).transfer(b.stake);
            payable(b.player2).transfer(b.stake);
        }

        b.resolved = true;
    }

    function abs(int64 x) internal pure returns (int64) {
        return x >= 0 ? x : -x;
    }

    function getAllBattles() external view returns (Battle[] memory) {
        return battles;
    }

    // Lucky Number Game Functions
    function createLuckyGame(
        uint256 _entryFee,
        uint256 _minGuess,
        uint256 _maxGuess,
        uint256 _duration
    ) external payable {
        require(msg.value == _entryFee, "Must pay entry fee to create game");
        require(_minGuess < _maxGuess, "Invalid guess range");
        require(_duration >= 60, "Game must last at least 1 minute");

        uint256 gameId = luckyGames.length;
        
        luckyGames.push();
        LuckyGame storage game = luckyGames[gameId];
        
        game.gameId = gameId;
        game.creator = msg.sender;
        game.entryFee = _entryFee;
        game.prizePool = _entryFee;
        game.minGuess = _minGuess;
        game.maxGuess = _maxGuess;
        game.winningNumber = 0;
        game.winner = address(0);
        game.isActive = true;
        game.isSettled = false;
        game.startTime = block.timestamp;
        game.endTime = block.timestamp + _duration;
        game.sequenceNumber = 0;
        
        // Creator automatically joins with a guess (middle of range)
        uint256 creatorGuess = (_minGuess + _maxGuess) / 2;
        game.players.push(msg.sender);
        game.playerGuesses[msg.sender] = creatorGuess;

        emit GameCreated(gameId, msg.sender, _entryFee);
        emit PlayerJoined(gameId, msg.sender, creatorGuess);
    }

    function joinLuckyGame(uint256 _gameId, uint256 _guess) external payable {
        require(_gameId < luckyGames.length, "Game does not exist");
        LuckyGame storage game = luckyGames[_gameId];
        
        require(game.isActive, "Game is not active");
        require(block.timestamp < game.endTime, "Game has ended");
        require(msg.value == game.entryFee, "Incorrect entry fee");
        require(_guess >= game.minGuess && _guess <= game.maxGuess, "Guess out of range");
        require(game.playerGuesses[msg.sender] == 0, "Already joined this game");

        game.players.push(msg.sender);
        game.playerGuesses[msg.sender] = _guess;
        game.prizePool += msg.value;

        emit PlayerJoined(_gameId, msg.sender, _guess);
    }

    function requestRandomNumber(uint256 _gameId) external payable {
        require(_gameId < luckyGames.length, "Game does not exist");
        LuckyGame storage game = luckyGames[_gameId];
        
        require(game.isActive, "Game is not active");
        require(block.timestamp >= game.endTime, "Game has not ended yet");
        require(game.sequenceNumber == 0, "Random number already requested");
        require(game.players.length > 0, "No players in game");

        // For Sepolia testnet, use pseudo-random fallback since Pyth Entropy is not available
        // In production, this should use Pyth Entropy on supported networks
        bytes32 pseudoRandom = keccak256(abi.encodePacked(
            block.timestamp,
            block.prevrandao,
            msg.sender,
            _gameId,
            game.players.length
        ));
        
        // Simulate entropy callback immediately for testnet
        _settleGameWithRandomNumber(_gameId, pseudoRandom);
        
        emit RandomNumberRequested(_gameId, 1); // Use dummy sequence number
    }

    // Internal function to settle game with random number
    function _settleGameWithRandomNumber(uint256 _gameId, bytes32 randomNumber) internal {
        LuckyGame storage game = luckyGames[_gameId];
        require(!game.isSettled, "Game already settled");

        // Convert random number to winning number within range
        uint256 range = game.maxGuess - game.minGuess + 1;
        game.winningNumber = game.minGuess + (uint256(randomNumber) % range);

        // Find the winner (closest guess)
        address winner = address(0);
        uint256 closestDiff = type(uint256).max;

        for (uint256 i = 0; i < game.players.length; i++) {
            address player = game.players[i];
            uint256 playerGuess = game.playerGuesses[player];
            uint256 diff = playerGuess > game.winningNumber ? 
                playerGuess - game.winningNumber : 
                game.winningNumber - playerGuess;

            if (diff < closestDiff) {
                closestDiff = diff;
                winner = player;
            }
        }

        game.winner = winner;
        game.isActive = false;
        game.isSettled = true;

        // Transfer prize to winner
        if (winner != address(0)) {
            payable(winner).transfer(game.prizePool);
        }

        emit GameSettled(_gameId, winner, game.winningNumber);
    }

    // Entropy callback function - called by Pyth Entropy contract (for supported networks)
    function entropyCallback(
        uint64 sequenceNumber,
        address /* provider */,
        bytes32 randomNumber
    ) internal override {
        uint256 gameId = sequenceToGameId[sequenceNumber];
        require(gameId < luckyGames.length, "Invalid game ID");
        
        _settleGameWithRandomNumber(gameId, randomNumber);
    }

    // Required by IEntropyConsumer interface
    function getEntropy() internal view override returns (address) {
        return address(entropy);
    }

    // View functions for Lucky Games - Split into smaller functions to avoid stack depth
    function getLuckyGameBasic(uint256 _gameId) external view returns (
        uint256 gameId,
        address creator,
        uint256 entryFee,
        uint256 prizePool,
        uint256 playerCount
    ) {
        require(_gameId < luckyGames.length, "Game does not exist");
        LuckyGame storage game = luckyGames[_gameId];
        
        return (
            game.gameId,
            game.creator,
            game.entryFee,
            game.prizePool,
            game.players.length
        );
    }
    
    function getLuckyGameDetails(uint256 _gameId) external view returns (
        uint256 minGuess,
        uint256 maxGuess,
        uint256 winningNumber,
        address winner,
        bool isActive,
        bool isSettled
    ) {
        require(_gameId < luckyGames.length, "Game does not exist");
        LuckyGame storage game = luckyGames[_gameId];
        
        return (
            game.minGuess,
            game.maxGuess,
            game.winningNumber,
            game.winner,
            game.isActive,
            game.isSettled
        );
    }
    
    function getLuckyGameTiming(uint256 _gameId) external view returns (
        uint256 startTime,
        uint256 endTime
    ) {
        require(_gameId < luckyGames.length, "Game does not exist");
        LuckyGame storage game = luckyGames[_gameId];
        
        return (
            game.startTime,
            game.endTime
        );
    }

    function getPlayerGuess(uint256 _gameId, address _player) external view returns (uint256) {
        require(_gameId < luckyGames.length, "Game does not exist");
        return luckyGames[_gameId].playerGuesses[_player];
    }

    function getGamePlayers(uint256 _gameId) external view returns (address[] memory) {
        require(_gameId < luckyGames.length, "Game does not exist");
        return luckyGames[_gameId].players;
    }

    function getLuckyGameCount() external view returns (uint256) {
        return luckyGames.length;
    }
}