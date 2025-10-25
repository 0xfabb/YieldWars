import express from 'express';
import { BattleOrchestrator } from '../orchestrator/BattleOrchestrator.js';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('BattleRoutes');

export function battleRoutes(orchestrator: BattleOrchestrator): express.Router {
  const router = express.Router();

  // GET /api/battles - List active battles
  router.get('/', async (req, res) => {
    try {
      const battles = orchestrator.getActiveBattles();
      
      logger.info(`Retrieved ${battles.length} active battles`);
      
      // Debug: log the first battle structure
      if (battles.length > 0) {
        logger.debug('First battle structure:', {
          battle: battles[0],
          keys: Object.keys(battles[0])
        });
      }
      
      res.json({
        success: true,
        battles: battles.map(battle => ({
          id: battle.id?.toString() || 'unknown',
          player: battle.player || 'unknown',
          prediction: battle.prediction?.toString() || '0',
          isHigher: battle.isHigher || false,
          stake: battle.stake?.toString() || '0',
          startTime: battle.startTime || 0,
          duration: battle.duration || 0,
          resolved: battle.resolved || false,
          finalPrice: battle.finalPrice?.toString() || '0',
          winner: battle.winner || '',
          createdAt: battle.createdAt || 0,
          expiresAt: battle.expiresAt || 0
        })),
        count: battles.length
      });

    } catch (error) {
      logger.error('Failed to get battles:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve battles',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // POST /api/battles - Create a new battle
  router.post('/', async (req, res) => {
    try {
      const { userAddress, stakeWei, predictionValue, durationSec } = req.body;

      // Validate required fields
      if (!userAddress || !stakeWei || !predictionValue) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields',
          message: 'userAddress, stakeWei, and predictionValue are required'
        });
      }

      // Validate Ethereum address format
      if (!/^0x[a-fA-F0-9]{40}$/.test(userAddress)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid address format',
          message: 'userAddress must be a valid Ethereum address'
        });
      }

      // Validate stake amount
      const stakeAmount = BigInt(stakeWei);
      if (stakeAmount <= 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid stake amount',
          message: 'stakeWei must be greater than 0'
        });
      }

      // Validate prediction value
      const prediction = parseFloat(predictionValue);
      if (isNaN(prediction) || prediction <= 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid prediction value',
          message: 'predictionValue must be a positive number'
        });
      }

      // Validate duration
      const duration = durationSec || 300; // Default 5 minutes
      if (duration < 60 || duration > 3600) {
        return res.status(400).json({
          success: false,
          error: 'Invalid duration',
          message: 'durationSec must be between 60 and 3600 seconds'
        });
      }

      logger.info('Creating battle', {
        userAddress,
        stakeWei,
        predictionValue,
        durationSec: duration
      });

      const result = await orchestrator.createBattle(
        userAddress,
        stakeWei,
        predictionValue,
        duration
      );

      if (result.success) {
        res.status(201).json({
          success: true,
          data: {
            battleId: result.battleId,
            message: result.message
          }
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Battle creation failed',
          message: result.message
        });
      }

    } catch (error) {
      logger.error('Failed to create battle:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // POST /api/battles/:battleId/join - Join an existing battle
  router.post('/:battleId/join', async (req, res) => {
    try {
      const { battleId } = req.params;
      const { userAddress, prediction } = req.body;

      // Validate required fields
      if (!userAddress || !prediction) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields',
          message: 'userAddress and prediction are required'
        });
      }

      // Validate battle ID
      const battleIdNum = parseInt(battleId);
      if (isNaN(battleIdNum) || battleIdNum < 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid battle ID',
          message: 'battleId must be a non-negative integer'
        });
      }

      // Validate Ethereum address format
      if (!/^0x[a-fA-F0-9]{40}$/.test(userAddress)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid address format',
          message: 'userAddress must be a valid Ethereum address'
        });
      }

      // Validate prediction value
      const predictionValue = parseFloat(prediction);
      if (isNaN(predictionValue) || predictionValue <= 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid prediction value',
          message: 'prediction must be a positive number'
        });
      }

      logger.info('Joining battle', {
        battleId: battleIdNum,
        userAddress,
        prediction
      });

      const result = await orchestrator.joinBattle(
        userAddress,
        battleIdNum,
        prediction
      );

      if (result.success) {
        res.json({
          success: true,
          data: {
            message: result.message
          }
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Failed to join battle',
          message: result.message
        });
      }

    } catch (error) {
      logger.error('Failed to join battle:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // GET /api/battles/:battleId - Get specific battle details
  router.get('/:battleId', async (req, res) => {
    try {
      const { battleId } = req.params;
      const battleIdNum = parseInt(battleId);

      if (isNaN(battleIdNum) || battleIdNum < 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid battle ID',
          message: 'battleId must be a non-negative integer'
        });
      }

      const battles = orchestrator.getActiveBattles();
      const battle = battles.find(b => b.id === battleIdNum);

      if (!battle) {
        return res.status(404).json({
          success: false,
          error: 'Battle not found',
          message: `Battle with ID ${battleIdNum} not found or not active`
        });
      }

      res.json({
        success: true,
        data: {
          id: battle.id,
          player1: battle.player1,
          player2: battle.player2,
          stake: battle.stake.toString(),
          resolved: battle.resolved,
          prediction1: battle.prediction1.toString(),
          prediction2: battle.prediction2.toString(),
          finalPrice: battle.finalPrice.toString(),
          winner: battle.winner,
          createdAt: battle.createdAt,
          expiresAt: battle.expiresAt,
          timeRemaining: battle.expiresAt ? Math.max(0, battle.expiresAt - Date.now()) : 0
        }
      });

    } catch (error) {
      logger.error('Failed to get battle details:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // POST /api/battles/:battleId/resolve - Manually trigger battle resolution (admin only)
  router.post('/:battleId/resolve', async (req, res) => {
    try {
      const { battleId } = req.params;
      const { adminKey } = req.body;

      // Simple admin authentication (in production, use proper auth)
      if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized',
          message: 'Invalid admin key'
        });
      }

      const battleIdNum = parseInt(battleId);
      if (isNaN(battleIdNum) || battleIdNum < 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid battle ID',
          message: 'battleId must be a non-negative integer'
        });
      }

      logger.info(`Manual resolution requested for battle ${battleIdNum}`);

      // This would trigger immediate resolution
      // Implementation depends on your orchestrator design
      
      res.json({
        success: true,
        data: {
          message: `Battle ${battleIdNum} resolution triggered`
        }
      });

    } catch (error) {
      logger.error('Failed to trigger battle resolution:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  return router;
}
