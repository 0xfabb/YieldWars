import express from 'express';
import { BattleOrchestrator } from '../orchestrator/BattleOrchestrator.js';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('LuckyGameRoutes');

export function luckyGameRoutes(orchestrator: BattleOrchestrator): express.Router {
  const router = express.Router();

  // GET /api/luckygames - List active lucky games
  router.get('/', async (req, res) => {
    try {
      const games = orchestrator.getActiveLuckyGames();
      
      logger.info(`Retrieved ${games.length} active lucky games`);
      
      res.json({
        success: true,
        data: {
          games: games.map(game => ({
            id: game.id,
            player: game.player,
            entryFee: game.entryFee.toString(),
            guess: game.guess,
            minRange: game.minRange,
            maxRange: game.maxRange,
            resolved: game.resolved,
            winner: game.winner,
            randomNumber: game.randomNumber,
            createdAt: game.createdAt,
            expiresAt: game.expiresAt,
            timeRemaining: Math.max(0, game.expiresAt - Date.now())
          })),
          count: games.length
        }
      });

    } catch (error) {
      logger.error('Failed to get lucky games:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve lucky games',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // POST /api/luckygames - Create a new lucky game
  router.post('/', async (req, res) => {
    try {
      const { userAddress, entryFee, minGuess, maxGuess, guess, durationSec } = req.body;

      // Validate required fields
      if (!userAddress || !entryFee || minGuess === undefined || maxGuess === undefined || guess === undefined) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields',
          message: 'userAddress, entryFee, minGuess, maxGuess, and guess are required'
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

      // Validate entry fee
      const feeAmount = BigInt(entryFee);
      if (feeAmount <= 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid entry fee',
          message: 'entryFee must be greater than 0'
        });
      }

      // Validate number range
      const minGuessNum = parseInt(minGuess);
      const maxGuessNum = parseInt(maxGuess);
      const guessNum = parseInt(guess);

      if (isNaN(minGuessNum) || isNaN(maxGuessNum) || isNaN(guessNum)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid number format',
          message: 'minGuess, maxGuess, and guess must be valid integers'
        });
      }

      if (minGuessNum >= maxGuessNum) {
        return res.status(400).json({
          success: false,
          error: 'Invalid range',
          message: 'minGuess must be less than maxGuess'
        });
      }

      if (guessNum < minGuessNum || guessNum > maxGuessNum) {
        return res.status(400).json({
          success: false,
          error: 'Guess out of range',
          message: `guess must be between ${minGuessNum} and ${maxGuessNum}`
        });
      }

      // Validate range size (prevent too large ranges)
      if (maxGuessNum - minGuessNum > 1000) {
        return res.status(400).json({
          success: false,
          error: 'Range too large',
          message: 'Range cannot exceed 1000 numbers'
        });
      }

      // Validate duration
      const duration = durationSec || 60; // Default 1 minute
      if (duration < 10 || duration > 300) {
        return res.status(400).json({
          success: false,
          error: 'Invalid duration',
          message: 'durationSec must be between 10 and 300 seconds'
        });
      }

      logger.info('Creating lucky game', {
        userAddress,
        entryFee,
        range: `${minGuessNum}-${maxGuessNum}`,
        guess: guessNum,
        durationSec: duration
      });

      const result = await orchestrator.createLuckyGame(
        userAddress,
        entryFee,
        minGuessNum,
        maxGuessNum,
        guessNum,
        duration
      );

      if (result.success) {
        res.status(201).json({
          success: true,
          data: {
            gameId: result.gameId,
            message: result.message,
            expiresAt: Date.now() + (duration * 1000)
          }
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Lucky game creation failed',
          message: result.message
        });
      }

    } catch (error) {
      logger.error('Failed to create lucky game:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // GET /api/luckygames/types - Get available game types (must come before /:gameId)
  router.get('/types', (req, res) => {
    const gameTypes = [
      {
        type: 'dice',
        name: 'Dice Roll',
        description: 'Guess the dice roll (1-6)',
        range: { min: 1, max: 6 },
        duration: 30,
        odds: '1 in 6'
      },
      {
        type: 'coin',
        name: 'Coin Flip',
        description: 'Guess heads (1) or tails (0)',
        range: { min: 0, max: 1 },
        duration: 15,
        odds: '1 in 2'
      },
      {
        type: 'lottery',
        name: 'Mini Lottery',
        description: 'Pick a number from 1-100',
        range: { min: 1, max: 100 },
        duration: 60,
        odds: '1 in 100'
      },
      {
        type: 'roulette',
        name: 'Roulette Number',
        description: 'Guess the roulette number (0-36)',
        range: { min: 0, max: 36 },
        duration: 45,
        odds: '1 in 37'
      }
    ];

    res.json({
      success: true,
      data: {
        gameTypes,
        count: gameTypes.length
      }
    });
  });

  // GET /api/luckygames/:gameId - Get specific lucky game details
  router.get('/:gameId', async (req, res) => {
    try {
      const { gameId } = req.params;

      if (!gameId || typeof gameId !== 'string') {
        return res.status(400).json({
          success: false,
          error: 'Invalid game ID',
          message: 'gameId must be a valid string'
        });
      }

      const games = orchestrator.getActiveLuckyGames();
      const game = games.find(g => g.id === gameId);

      if (!game) {
        return res.status(404).json({
          success: false,
          error: 'Game not found',
          message: `Lucky game with ID ${gameId} not found or not active`
        });
      }

      res.json({
        success: true,
        data: {
          id: game.id,
          player: game.player,
          entryFee: game.entryFee.toString(),
          guess: game.guess,
          minRange: game.minRange,
          maxRange: game.maxRange,
          resolved: game.resolved,
          winner: game.winner,
          randomNumber: game.randomNumber,
          createdAt: game.createdAt,
          expiresAt: game.expiresAt,
          timeRemaining: Math.max(0, game.expiresAt - Date.now())
        }
      });

    } catch (error) {
      logger.error('Failed to get lucky game details:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // POST /api/luckygames/quick - Create a quick lucky game with preset ranges
  router.post('/quick', async (req, res) => {
    try {
      const { userAddress, entryFee, gameType, guess } = req.body;

      // Validate required fields
      if (!userAddress || !entryFee || !gameType || guess === undefined) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields',
          message: 'userAddress, entryFee, gameType, and guess are required'
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

      // Validate entry fee
      const feeAmount = BigInt(entryFee);
      if (feeAmount <= 0) {
        return res.status(400).json({
          success: false,
          error: 'Invalid entry fee',
          message: 'entryFee must be greater than 0'
        });
      }

      // Define preset game types
      const gameTypes: Record<string, { min: number; max: number; duration: number }> = {
        'dice': { min: 1, max: 6, duration: 30 },
        'coin': { min: 0, max: 1, duration: 15 },
        'lottery': { min: 1, max: 100, duration: 60 },
        'roulette': { min: 0, max: 36, duration: 45 }
      };

      const gameConfig = gameTypes[gameType.toLowerCase()];
      if (!gameConfig) {
        return res.status(400).json({
          success: false,
          error: 'Invalid game type',
          message: `gameType must be one of: ${Object.keys(gameTypes).join(', ')}`
        });
      }

      const guessNum = parseInt(guess);
      if (isNaN(guessNum) || guessNum < gameConfig.min || guessNum > gameConfig.max) {
        return res.status(400).json({
          success: false,
          error: 'Guess out of range',
          message: `For ${gameType}, guess must be between ${gameConfig.min} and ${gameConfig.max}`
        });
      }

      logger.info('Creating quick lucky game', {
        userAddress,
        entryFee,
        gameType,
        guess: guessNum,
        range: `${gameConfig.min}-${gameConfig.max}`
      });

      const result = await orchestrator.createLuckyGame(
        userAddress,
        entryFee,
        gameConfig.min,
        gameConfig.max,
        guessNum,
        gameConfig.duration
      );

      if (result.success) {
        res.status(201).json({
          success: true,
          data: {
            gameId: result.gameId,
            gameType,
            message: result.message,
            range: `${gameConfig.min}-${gameConfig.max}`,
            duration: gameConfig.duration,
            expiresAt: Date.now() + (gameConfig.duration * 1000)
          }
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Quick lucky game creation failed',
          message: result.message
        });
      }

    } catch (error) {
      logger.error('Failed to create quick lucky game:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });


  return router;
}
