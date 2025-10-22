// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ArenaVault {
    address public owner;
    mapping(address => uint256) public balances;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        require(msg.value > 0, "No ETH sent");
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdrawn(msg.sender, amount);
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }

    // --- BATTLES ---
    enum BattleStatus {
        Waiting,
        Ongoing,
        Settled
    }

    struct Battle {
        address player1;
        address player2;
        uint256 stake;
        address winner;
        BattleStatus status;
    }

    Battle[] public battles;
    mapping(address => uint256[]) public playerBattles;

    // Create a battle
    function createBattle(uint256 stake) external {
        require(balances[msg.sender] >= stake, "Not enough balance");
        balances[msg.sender] -= stake;

        Battle memory newBattle = Battle({
            player1: msg.sender,
            player2: address(0),
            stake: stake,
            winner: address(0),
            status: BattleStatus.Waiting
        });

        battles.push(newBattle);
        playerBattles[msg.sender].push(battles.length - 1);
    }

    // Join an existing battle
    function joinBattle(uint256 battleId) external {
        Battle storage battle = battles[battleId];
        require(battle.status == BattleStatus.Waiting, "Battle not open");
        require(battle.player1 != msg.sender, "Cannot join own battle");
        require(balances[msg.sender] >= battle.stake, "Not enough balance");

        balances[msg.sender] -= battle.stake;
        battle.player2 = msg.sender;
        battle.status = BattleStatus.Ongoing;

        playerBattles[msg.sender].push(battleId);
    }

    // Settle battle (random winner MVP)
    function settleBattle(uint256 battleId) external {
        Battle storage battle = battles[battleId];
        require(battle.status == BattleStatus.Ongoing, "Battle not ongoing");

        // Pseudo-random winner (MVP only; replace with Pyth Entropy later)
        uint256 rand = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    battle.player1,
                    battle.player2
                )
            )
        );
        address winner = (rand % 2 == 0) ? battle.player1 : battle.player2;

        uint256 totalStake = battle.stake * 2;
        balances[winner] += totalStake;

        battle.winner = winner;
        battle.status = BattleStatus.Settled;
    }

    // --- FRONTEND HELPERS ---
    function getBattle(uint256 battleId) external view returns (Battle memory) {
        return battles[battleId];
    }

    function getAllBattles() external view returns (Battle[] memory) {
        return battles;
    }

    function getOpenBattles() external view returns (Battle[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < battles.length; i++) {
            if (battles[i].status == BattleStatus.Waiting) count++;
        }

        Battle[] memory open = new Battle[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < battles.length; i++) {
            if (battles[i].status == BattleStatus.Waiting) {
                open[index] = battles[i];
                index++;
            }
        }
        return open;
    }
}
