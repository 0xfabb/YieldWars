import cron from 'node-cron';
import { EthersHelper } from '../utils/ethersHelper.js';
import { PythService } from '../services/PythService.js';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('BattleOrchestrator');

export interface Battle {
  id: number;
  player: string;
  prediction: bigint;
  isHigher: boolean;
  stake: bigint;
  startTime: number;
  duration: number;
  resolved: boolean;
  finalPrice: bigint;
  winner: string;
  createdAt: number;
  expiresAt: number;
}

export interface LuckyGame {
  id: string;
  player: string;
  entryFee: bigint;
  guess: number;
  minRange: number;
  maxRange: number;
  resolved: boolean;
  winner: boolean;
  randomNumber?: number;
  createdAt: number;
  expiresAt: number;
}

export class BattleOrchestrator {
  private ethersHelper: EthersHelper;
  private pythService: PythService;
  private activeBattles: Map<number, Battle> = new Map();
  private activeLuckyGames: Map<string, LuckyGame> = new Map();
  private resolutionTask: cron.ScheduledTask | null = null;
  private isInitialized = false;
  private isShuttingDown = false;

  constructor() {
    this.ethersHelper = new EthersHelper();
    this.pythService = new PythService();
  }

  async initialize(): Promise<void> {
    try {
      logger.info('Initializing Battle Orchestrator...');

      // Check signer balance
      const balance = await this.ethersHelper.getSignerBalance();
      logger.info(`Deployer wallet balance: ${balance} ETH`);

      if (parseFloat(balance) < 0.01) {
        logger.warn('Low deployer wallet balance! Please add more Sepolia ETH');
      }

      // Health check Pyth service
      const pythHealthy = await this.pythService.healthCheck();
      if (!pythHealthy) {
        logger.warn('Pyth Hermes API health check failed');
      }

      // Load existing battles from contract
      // TODO: Update syncBattlesFromContract to use V2 structure
      // await this.syncBattlesFromContract();

      // Start resolution cron job (every 30 seconds)
      this.startResolutionWorker();

      this.isInitialized = true;
      logger.info('Battle Orchestrator initialized successfully');

    } catch (error) {
      logger.error('Failed to initialize Battle Orchestrator:', error);
      throw error;
    }
  }

  private async syncBattlesFromContract(): Promise<void> {
    try {
      logger.info('Syncing battles from contract...');
      
      const contractBattles = await this.ethersHelper.getAllBattles();
      
      for (let i = 0; i < contractBattles.length; i++) {
        const battle = contractBattles[i];
        
        // Only track unresolved battles with both players
        if (!battle.resolved && battle.player2 !== '0x0000000000000000000000000000000000000000') {
          const battleData: Battle = {
            id: i,
            player1: battle.player1,
            player2: battle.player2,
            stake: battle.stake,
            resolved: battle.resolved,
            prediction1: battle.prediction1,
            prediction2: battle.prediction2,
            finalPrice: battle.finalPrice,
            winner: battle.winner,
            createdAt: Date.now(), // Approximate - we don't have exact timestamp
            expiresAt: Date.now() + 300000 // 5 minutes from now
          };
          
          this.activeBattles.set(i, battleData);
          logger.info(`Loaded active battle ${i}`, {
            player1: battle.player1,
            player2: battle.player2,
            stake: battle.stake.toString()
          });
        }
      }

      logger.info(`Synced ${this.activeBattles.size} active battles from contract`);

    } catch (error) {
      logger.error('Failed to sync battles from contract:', error);
    }
  }

  private startResolutionWorker(): void {
    // Run every 30 seconds
    this.resolutionTask = cron.schedule('*/30 * * * * *', async () => {
      if (this.isShuttingDown) return;
      
      try {
        await this.checkAndResolveBattles();
        await this.checkAndResolveLuckyGames();
      } catch (error) {
        logger.error('Error in resolution worker:', error);
      }
    });

    logger.info('Resolution worker started (30-second intervals)');
  }

  private async checkAndResolveBattles(): Promise<void> {
    const now = Date.now();
    
    // First, sync with contract to detect any battles created directly
    await this.syncWithContract();
    
    const battlesToResolve: Battle[] = [];

    // Find battles ready for resolution
    for (const [battleId, battle] of this.activeBattles) {
      if (!battle.resolved && battle.expiresAt && now >= battle.expiresAt) {
        battlesToResolve.push(battle);
      }
    }

    if (battlesToResolve.length === 0) {
      return;
    }

    logger.info(`Found ${battlesToResolve.length} battles ready for resolution`);

    // Resolve battles one by one
    for (const battle of battlesToResolve) {
      try {
        await this.resolveBattle(battle.id);
      } catch (error) {
        logger.error(`Failed to resolve battle ${battle.id}:`, error);
        
        // Remove from active battles if it fails multiple times
        // In production, you might want more sophisticated retry logic
        this.activeBattles.delete(battle.id);
      }
    }
  }

  private async resolveBattle(battleId: number): Promise<void> {
    const battle = this.activeBattles.get(battleId);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const expiryTime = battle ? battle.startTime + battle.duration : 0;
    
    logger.info(`Resolving battle ${battleId}...`, {
      currentTime,
      expiryTime,
      timeRemaining: expiryTime - currentTime,
      isExpired: currentTime >= expiryTime
    });

    try {
      // Fetch fresh price update data from Hermes
      const priceUpdateData = await this.pythService.fetchPriceUpdateData();
      
      if (!this.pythService.validatePriceUpdateData(priceUpdateData)) {
        throw new Error('Invalid price update data format');
      }

      // Resolve battle on-chain
      const tx = await this.ethersHelper.resolveBattle(battleId, priceUpdateData);
      
      // Wait for confirmation
      const receipt = await tx.wait();
      
      if (receipt?.status === 1) {
        logger.info(`Battle ${battleId} resolved successfully`, {
          txHash: tx.hash,
          blockNumber: receipt.blockNumber,
          gasUsed: receipt.gasUsed.toString()
        });

        // Remove from active battles
        this.activeBattles.delete(battleId);
        
        // Sync the resolved battle data
        await this.updateBattleFromContract(battleId);
        
      } else {
        throw new Error('Transaction failed');
      }

    } catch (error) {
      logger.error(`Failed to resolve battle ${battleId}:`, error);
      throw error;
    }
  }

  private async updateBattleFromContract(battleId: number): Promise<void> {
    try {
      const battle = await this.ethersHelper.getBattle(battleId);
      
      logger.info(`Battle ${battleId} final result`, {
        winner: battle.winner,
        finalPrice: battle.finalPrice.toString(),
        resolved: battle.resolved
      });
      
    } catch (error) {
      logger.error(`Failed to update battle ${battleId} from contract:`, error);
    }
  }

  private async checkAndResolveLuckyGames(): Promise<void> {
    const now = Date.now();
    const gamesToResolve: LuckyGame[] = [];

    // Find games ready for resolution
    for (const [gameId, game] of this.activeLuckyGames) {
      if (!game.resolved && now >= game.expiresAt) {
        gamesToResolve.push(game);
      }
    }

    if (gamesToResolve.length === 0) {
      return;
    }

    logger.info(`Found ${gamesToResolve.length} lucky games ready for resolution`);

    // Resolve games
    for (const game of gamesToResolve) {
      try {
        await this.resolveLuckyGame(game.id);
      } catch (error) {
        logger.error(`Failed to resolve lucky game ${game.id}:`, error);
        this.activeLuckyGames.delete(game.id);
      }
    }
  }

  private async resolveLuckyGame(gameId: string): Promise<void> {
    const game = this.activeLuckyGames.get(gameId);
    if (!game) return;

    logger.info(`Resolving lucky game ${gameId}...`);

    try {
      // For Sepolia testnet, use pseudo-random fallback
      // In production on mainnet, you would use Pyth Entropy
      const randomHex = this.ethersHelper.generatePseudoRandom(gameId);
      const randomNumber = parseInt(randomHex.slice(-8), 16) % (game.maxRange - game.minRange + 1) + game.minRange;
      
      const winner = randomNumber === game.guess;
      
      // Update game state
      game.resolved = true;
      game.winner = winner;
      game.randomNumber = randomNumber;
      
      logger.info(`Lucky game ${gameId} resolved`, {
        guess: game.guess,
        randomNumber,
        winner,
        player: game.player
      });

      // In a real implementation, you would call a contract method to settle the game
      // For now, we just track it in memory
      
    } catch (error) {
      logger.error(`Failed to resolve lucky game ${gameId}:`, error);
      throw error;
    }
  }

  // Public API methods

  async createBattle(userAddress: string, stakeWei: string, predictionValue: string, durationSec: number = 300): Promise<{ battleId: number; success: boolean; message: string }> {
    try {
      logger.info('Creating battle via orchestrator', {
        userAddress,
        stakeWei,
        predictionValue,
        durationSec
      });

      // Create battle on the blockchain contract
      const now = Date.now();
      const predictionInCents = BigInt(Math.floor(parseFloat(predictionValue) * 100));
      const isHigher = true; // Default for now, should come from frontend
      
      logger.info('Creating battle on contract', {
        userAddress,
        stakeWei,
        predictionValue,
        predictionInCents: predictionInCents.toString(),
        isHigher,
        durationSec
      });
      
      // Call the contract to create the battle
      const tx = await this.ethersHelper.createBattle(
        userAddress,
        predictionInCents,
        isHigher,
        BigInt(stakeWei),
        durationSec
      );
      
      // Get the battle ID from the transaction receipt
      logger.info('Waiting for transaction confirmation...', { txHash: tx.hash });
      const receipt = await tx.wait();
      
      if (!receipt) {
        throw new Error('Transaction receipt is null');
      }
      
      logger.info('Transaction confirmed', { 
        txHash: tx.hash, 
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString()
      });
      
      // Get battle count from contract to determine the new battle ID
      const allBattles = await this.ethersHelper.getAllBattles();
      const battleId = allBattles.length - 1; // Latest battle is at length - 1
      
      logger.info('Determined battle ID from contract', { 
        battleId, 
        totalBattles: allBattles.length,
        txHash: tx.hash 
      });
      
      // Get the actual battle from contract to sync timing
      const contractBattle = await this.ethersHelper.getBattle(battleId);
      
      // Store battle in memory for tracking with contract timing
      const battle: Battle = {
        id: battleId,
        player: userAddress,
        prediction: predictionInCents,
        isHigher: isHigher,
        stake: BigInt(stakeWei),
        startTime: Number(contractBattle.startTime), // Use contract's block.timestamp
        duration: durationSec,
        resolved: false,
        finalPrice: BigInt(0),
        winner: '',
        createdAt: now,
        expiresAt: (Number(contractBattle.startTime) + durationSec) * 1000 // Convert to milliseconds for server
      };
      
      this.activeBattles.set(battleId, battle);
      
      logger.info('Battle created successfully on contract', {
        battleId,
        txHash: tx.hash,
        player: userAddress,
        prediction: predictionValue,
        contractStartTime: contractBattle.startTime.toString(),
        duration: durationSec,
        expiresAt: new Date(battle.expiresAt).toISOString(),
        timeUntilExpiry: Math.round((battle.expiresAt - Date.now()) / 1000) + ' seconds'
      });
      
      return {
        battleId,
        success: true,
        message: 'Battle created successfully on blockchain'
      };
      
    } catch (error) {
      logger.error('Failed to create battle:', error);
      return {
        battleId: -1,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private extractBattleIdFromReceipt(receipt: any): number {
    try {
      logger.debug('Extracting battle ID from receipt', {
        txHash: receipt.hash,
        logsCount: receipt.logs?.length || 0
      });

      // Look for BattleCreated event in the logs
      for (let i = 0; i < receipt.logs.length; i++) {
        const log = receipt.logs[i];
        logger.debug(`Log ${i}:`, {
          address: log.address,
          topics: log.topics,
          data: log.data
        });

        try {
          // BattleCreated event signature: BattleCreated(uint256 indexed battleId, ...)
          // The battleId should be in topics[1] (first indexed parameter)
          if (log.topics && log.topics.length > 1) {
            const battleId = parseInt(log.topics[1], 16);
            logger.info('Extracted battle ID from event log', { 
              battleId, 
              logIndex: i,
              topic: log.topics[1],
              txHash: receipt.hash 
            });
            return battleId;
          }
        } catch (parseError) {
          logger.debug(`Failed to parse log ${i}:`, parseError);
          continue;
        }
      }
      
      // If no event found, the battle ID is likely the array length - 1
      // Since ArenaVault uses battles.length as the ID
      logger.warn('No BattleCreated event found, using contract logic fallback');
      
      // Call contract to get the latest battle count
      // The new battle should be at index (count - 1)
      const fallbackId = 0; // Will be updated by calling contract
      logger.warn('Using fallback battle ID', { 
        fallbackId, 
        txHash: receipt.hash,
        note: 'Battle ID will be determined by contract state'
      });
      return fallbackId;
      
    } catch (error) {
      logger.error('Error extracting battle ID from receipt:', error);
      return 0;
    }
  }

  async joinBattle(userAddress: string, battleId: number, prediction: string): Promise<{ success: boolean; message: string }> {
    try {
      logger.info('Battle join request', { userAddress, battleId, prediction });
      
      // Track the battle for resolution
      const battle = await this.ethersHelper.getBattle(battleId);
      if (battle && !battle.resolved) {
        const battleData: Battle = {
          id: battleId,
          player1: battle.player1,
          player2: battle.player2,
          stake: battle.stake,
          resolved: battle.resolved,
          prediction1: battle.prediction1,
          prediction2: battle.prediction2,
          finalPrice: battle.finalPrice,
          winner: battle.winner,
          createdAt: Date.now(),
          expiresAt: Date.now() + 300000 // 5 minutes
        };
        
        this.activeBattles.set(battleId, battleData);
        logger.info(`Battle ${battleId} added to resolution queue`);
      }
      
      return { success: true, message: 'Battle join tracked' };
      
    } catch (error) {
      logger.error('Failed to process battle join:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async createLuckyGame(userAddress: string, entryFee: string, minGuess: number, maxGuess: number, guess: number, durationSec: number = 60): Promise<{ gameId: string; success: boolean; message: string }> {
    try {
      const gameId = `game_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const game: LuckyGame = {
        id: gameId,
        player: userAddress,
        entryFee: BigInt(entryFee),
        guess,
        minRange: minGuess,
        maxRange: maxGuess,
        resolved: false,
        winner: false,
        createdAt: Date.now(),
        expiresAt: Date.now() + (durationSec * 1000)
      };
      
      this.activeLuckyGames.set(gameId, game);
      
      logger.info('Lucky game created', {
        gameId,
        player: userAddress,
        guess,
        range: `${minGuess}-${maxGuess}`,
        expiresAt: new Date(game.expiresAt).toISOString()
      });
      
      return {
        gameId,
        success: true,
        message: 'Lucky game created successfully'
      };
      
    } catch (error) {
      logger.error('Failed to create lucky game:', error);
      return {
        gameId: '',
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  getActiveBattles(): Battle[] {
    return Array.from(this.activeBattles.values());
  }

  getActiveLuckyGames(): LuckyGame[] {
    return Array.from(this.activeLuckyGames.values());
  }

  async getSystemStatus(): Promise<any> {
    const balance = await this.ethersHelper.getSignerBalance();
    const pythHealthy = await this.pythService.healthCheck();
    
    return {
      initialized: this.isInitialized,
      deployerBalance: balance,
      pythServiceHealthy: pythHealthy,
      activeBattles: this.activeBattles.size,
      activeLuckyGames: this.activeLuckyGames.size,
      resolutionWorkerRunning: this.resolutionTask !== null
    };
  }

  private async syncWithContract(): Promise<void> {
    try {
      // Get total battle count from contract
      const battleCount = await this.ethersHelper.getArenaContract().getBattleCount();
      const totalBattles = Number(battleCount);
      
      logger.debug(`Syncing with contract: ${totalBattles} total battles`);
      
      // Check each battle that we might not have in memory
      for (let i = 0; i < totalBattles; i++) {
        if (!this.activeBattles.has(i)) {
          try {
            const contractBattle = await this.ethersHelper.getBattle(i);
            
            // Only add unresolved battles
            if (!contractBattle.resolved) {
              const battle: Battle = {
                id: i,
                player: contractBattle.player,
                prediction: contractBattle.prediction,
                isHigher: contractBattle.isHigher,
                stake: contractBattle.stake,
                startTime: Number(contractBattle.startTime),
                duration: Number(contractBattle.duration),
                resolved: contractBattle.resolved,
                finalPrice: contractBattle.finalPrice,
                winner: contractBattle.winner,
                createdAt: Number(contractBattle.createdAt),
                expiresAt: (Number(contractBattle.startTime) + Number(contractBattle.duration)) * 1000 // Convert to milliseconds
              };
              
              this.activeBattles.set(i, battle);
              logger.info(`Synced battle ${i} from contract`, {
                player: battle.player,
                prediction: battle.prediction.toString(),
                expiresAt: new Date(battle.expiresAt).toISOString()
              });
            }
          } catch (error) {
            logger.debug(`Could not sync battle ${i}:`, error.message);
          }
        }
      }
      
      logger.debug(`Contract sync complete: ${this.activeBattles.size} active battles in memory`);
      
    } catch (error) {
      logger.error('Failed to sync with contract:', error);
    }
  }

  async shutdown(): Promise<void> {
    logger.info('Shutting down Battle Orchestrator...');
    this.isShuttingDown = true;
    
    if (this.resolutionTask) {
      this.resolutionTask.stop();
      this.resolutionTask = null;
    }
    
    // Clear active battles and games
    this.activeBattles.clear();
    this.activeLuckyGames.clear();
    
    logger.info('Battle Orchestrator shutdown complete');
  }
}
