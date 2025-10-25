import { ethers } from 'ethers';
import { createLogger } from './logger.js';

const logger = createLogger('EthersHelper');

export class EthersHelper {
  private sepoliaProvider: ethers.Provider;
  private mainnetProvider: ethers.Provider;
  private sepoliaSigner: ethers.Wallet;
  private mainnetSigner: ethers.Wallet;
  private arenaContract!: ethers.Contract;
  private pythContract!: ethers.Contract;
  private entropyContract!: ethers.Contract;

  constructor() {
    // Initialize Sepolia provider for YieldWars contracts
    const sepoliaRpcUrl = process.env.SEPOLIA_RPC_URL;
    if (!sepoliaRpcUrl) {
      throw new Error('SEPOLIA_RPC_URL environment variable is required');
    }
    this.sepoliaProvider = new ethers.JsonRpcProvider(sepoliaRpcUrl);

    // Initialize Mainnet provider for Pyth contracts
    const mainnetRpcUrl = process.env.MAINNET_RPC_URL || 'https://eth-mainnet.g.alchemy.com/v2/demo';
    this.mainnetProvider = new ethers.JsonRpcProvider(mainnetRpcUrl);

    // Initialize signers
    const privateKey = process.env.PRIVATE_KEY || process.env.DEPLOYER_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('PRIVATE_KEY or DEPLOYER_PRIVATE_KEY environment variable is required');
    }
    this.sepoliaSigner = new ethers.Wallet(privateKey, this.sepoliaProvider);
    this.mainnetSigner = new ethers.Wallet(privateKey, this.mainnetProvider);

    logger.info('Dual network setup initialized', {
      sepoliaWallet: this.sepoliaSigner.address,
      mainnetWallet: this.mainnetSigner.address,
      sepoliaRpc: sepoliaRpcUrl.includes('infura') ? 'Infura Sepolia' : 'Custom Sepolia',
      mainnetRpc: mainnetRpcUrl.includes('alchemy') ? 'Alchemy Mainnet' : 'Custom Mainnet'
    });

    // Initialize contracts
    this.initializeContracts();
  }

  private initializeContracts() {
    // YieldWars Contract ABI (updated for new architecture)
    const arenaAbi = [
      "function getAllBattles() external view returns (tuple(address player, uint256 prediction, bool isHigher, uint256 stake, uint256 startTime, uint256 duration, bool resolved, int64 finalPrice, address winner, uint256 createdAt)[])",
      "function createBattle(uint256 _prediction, bool _isHigher, uint256 _duration) external payable",
      "function resolveBattle(uint256 battleId, bytes[] calldata priceUpdateData) external payable",
      "function battles(uint256) external view returns (address player, uint256 prediction, bool isHigher, uint256 stake, uint256 startTime, uint256 duration, bool resolved, int64 finalPrice, address winner, uint256 createdAt)",
      "function getBattleCount() external view returns (uint256)",
      "function isBattleExpired(uint256 battleId) external view returns (bool)",
      "function createLuckyGame(string calldata _gameId, address _player, uint256 _guess, uint256 _minRange, uint256 _maxRange, uint256 _expiresAt) external payable",
      "function resolveLuckyGame(string calldata _gameId, uint256 _randomNumber) external",
      "function getLuckyGame(string calldata _gameId) external view returns (tuple(string gameId, address player, uint256 entryFee, uint256 guess, uint256 minRange, uint256 maxRange, uint256 randomNumber, bool resolved, bool winner, uint256 createdAt, uint256 expiresAt))",
      "function getAllLuckyGameIds() external view returns (string[] memory)",
      "function setResolver(address _resolver) external",
      "function resolver() external view returns (address)"
    ];

    // Pyth Contract ABI
    const pythAbi = [
      "function getUpdateFee(bytes[] calldata updateData) external view returns (uint feeAmount)",
      "function updatePriceFeeds(bytes[] calldata updateData) external payable",
      "function getPrice(bytes32 id) external view returns (tuple(int64 price, uint64 conf, int32 expo, uint publishTime))",
      "function getPriceNoOlderThan(bytes32 id, uint age) external view returns (tuple(int64 price, uint64 conf, int32 expo, uint publishTime))"
    ];

    // Entropy Contract ABI (basic functions)
    const entropyAbi = [
      "function requestRandomNumber() external returns (uint64 sequenceNumber)",
      "function getRandomNumber(uint64 sequenceNumber) external view returns (bytes32 randomNumber)"
    ];

    const arenaAddress = process.env.ARENA_CONTRACT_ADDRESS;
    const pythAddress = process.env.PYTH_CONTRACT_ADDRESS;
    const entropyAddress = process.env.ENTROPY_CONTRACT_ADDRESS;

    if (!arenaAddress || !pythAddress || !entropyAddress) {
      throw new Error('Contract addresses must be provided in environment variables');
    }

    // YieldWars contracts use Sepolia
    this.arenaContract = new ethers.Contract(arenaAddress, arenaAbi, this.sepoliaSigner);
    this.entropyContract = new ethers.Contract(entropyAddress, entropyAbi, this.sepoliaSigner);
    
    // Pyth contracts use Mainnet for real price data
    const mainnetPythAddress = "0x4305FB66699C3B2702D4d05CF36551390A4c69C6"; // Mainnet Pyth
    this.pythContract = new ethers.Contract(mainnetPythAddress, pythAbi, this.mainnetSigner);

    logger.info('Dual network contracts initialized', {
      yieldwars: `${arenaAddress} (Sepolia)`,
      pyth: `${mainnetPythAddress} (Mainnet)`,
      entropy: `${entropyAddress} (Sepolia)`,
      sepoliaWallet: this.sepoliaSigner.address,
      mainnetWallet: this.mainnetSigner.address
    });
  }

  async getSignerBalance(): Promise<string> {
    const sepoliaBalance = await this.sepoliaProvider.getBalance(this.sepoliaSigner.address);
    return ethers.formatEther(sepoliaBalance);
  }

  async getMainnetBalance(): Promise<string> {
    const mainnetBalance = await this.mainnetProvider.getBalance(this.mainnetSigner.address);
    return ethers.formatEther(mainnetBalance);
  }

  async getAllBattles(): Promise<any[]> {
    try {
      const battles = await this.arenaContract.getAllBattles();
      logger.debug(`Retrieved ${battles.length} battles from contract`);
      return battles;
    } catch (error) {
      logger.error('Failed to get battles:', error);
      return [];
    }
  }

  async getBattle(battleId: number): Promise<any> {
    try {
      const battle = await this.arenaContract.battles(battleId);
      return battle;
    } catch (error) {
      logger.error(`Failed to get battle ${battleId}:`, error);
      throw error;
    }
  }

  async getPythUpdateFee(priceUpdateData: string[]): Promise<bigint> {
    try {
      const fee = await this.pythContract.getUpdateFee(priceUpdateData);
      logger.debug(`Pyth update fee: ${ethers.formatEther(fee)} ETH`);
      return fee;
    } catch (error) {
      logger.error('Failed to get Pyth update fee:', error);
      throw error;
    }
  }

  async createBattle(
    userAddress: string, 
    prediction: bigint, 
    isHigher: boolean, 
    stake: bigint, 
    duration: number
  ): Promise<ethers.TransactionResponse> {
    try {
      logger.info('Creating battle on contract', {
        userAddress,
        prediction: prediction.toString(),
        isHigher,
        stake: stake.toString(),
        duration
      });

      // Note: Contract uses msg.sender as player and msg.value as stake
      // The server creates battles on behalf of users after receiving payment
      const tx = await this.arenaContract.createBattle(
        prediction,
        isHigher,
        duration,
        { value: stake }
      );

      logger.info('Battle creation transaction sent', {
        txHash: tx.hash,
        userAddress,
        stake: ethers.formatEther(stake)
      });

      return tx;
    } catch (error) {
      logger.error('Failed to create battle on contract:', error);
      throw error;
    }
  }

  async resolveBattle(battleId: number, priceUpdateData: string[]): Promise<ethers.TransactionResponse> {
    try {
      logger.info(`Resolving battle ${battleId}`, {
        priceUpdateDataLength: priceUpdateData.length,
        sepoliaBalance: await this.getSignerBalance(),
        mainnetBalance: await this.getMainnetBalance()
      });

      // Get the required fee
      const fee = await this.getPythUpdateFee(priceUpdateData);
      
      // Add small buffer to fee (0.000005 ETH)
      // const feeWithBuffer = fee + ethers.parseEther('0.000005');

      // Debug: Check battle state before resolution
      const battle = await this.arenaContract.battles(battleId);
      logger.debug('Battle state before resolution', {
        battleId,
        player: battle.player,
        startTime: battle.startTime.toString(),
        duration: battle.duration.toString(),
        resolved: battle.resolved,
        currentBlockTime: Math.floor(Date.now() / 1000),
        expiryTime: (Number(battle.startTime) + Number(battle.duration)),
        isExpired: Math.floor(Date.now() / 1000) >= (Number(battle.startTime) + Number(battle.duration))
      });

      // Estimate gas
      const gasEstimate = await this.arenaContract.resolveBattle.estimateGas(
        battleId,
        priceUpdateData,
        { value: fee }
      );

      // Add gas buffer
      const gasLimit = (gasEstimate * BigInt(120)) / BigInt(100); // 20% buffer

      // Send transaction
      const tx = await this.arenaContract.resolveBattle(
        battleId,
        priceUpdateData,
        {
          value: fee,
          gasLimit: gasLimit,
          maxFeePerGas: ethers.parseUnits('20', 'gwei'),
          maxPriorityFeePerGas: ethers.parseUnits('2', 'gwei')
        }
      );

      logger.info(`Battle resolution transaction sent`, {
        battleId,
        txHash: tx.hash,
        fee: ethers.formatEther(fee),
        gasLimit: gasLimit.toString()
      });

      return tx;
    } catch (error) {
      logger.error(`Failed to resolve battle ${battleId}:`, error);
      throw error;
    }
  }

  async requestEntropy(): Promise<bigint> {
    try {
      const tx = await this.entropyContract.requestRandomNumber();
      const receipt = await tx.wait();
      
      // Extract sequence number from logs (simplified)
      // In a real implementation, you'd parse the event logs properly
      logger.info('Entropy requested', { txHash: tx.hash });
      return BigInt(0); // Placeholder - would extract from event logs
    } catch (error) {
      logger.error('Failed to request entropy:', error);
      throw error;
    }
  }

  // Utility method to generate pseudo-random for testnet fallback
  generatePseudoRandom(gameId: string, blockHash?: string): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString();
    const combined = `${gameId}-${timestamp}-${random}-${blockHash || 'fallback'}`;
    return ethers.keccak256(ethers.toUtf8Bytes(combined));
  }

  getSepoliaProvider(): ethers.Provider {
    return this.sepoliaProvider;
  }

  getMainnetProvider(): ethers.Provider {
    return this.mainnetProvider;
  }

  getSepoliaSigner(): ethers.Wallet {
    return this.sepoliaSigner;
  }

  getMainnetSigner(): ethers.Wallet {
    return this.mainnetSigner;
  }

  getArenaContract(): ethers.Contract {
    return this.arenaContract;
  }

  getPythContract(): ethers.Contract {
    return this.pythContract;
  }

  getEntropyContract(): ethers.Contract {
    return this.entropyContract;
  }
}
