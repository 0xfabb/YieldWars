import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createLogger } from './utils/logger.js';
import { BattleOrchestrator } from './orchestrator/BattleOrchestrator.js';
import { battleRoutes } from './routes/battles.js';
import { luckyGameRoutes } from './routes/luckyGames.js';
import { healthRoutes } from './routes/health.js';

// Load environment variables
dotenv.config();

const logger = createLogger('Server');
const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  next();
});

// Initialize Battle Orchestrator
const orchestrator = new BattleOrchestrator();

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/battles', battleRoutes(orchestrator));
app.use('/api/luckygames', luckyGameRoutes(orchestrator));

// Error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, shutting down gracefully');
  await orchestrator.shutdown();
  process.exit(0);
});

process.on('SIGINT', async () => {
  logger.info('SIGINT received, shutting down gracefully');
  await orchestrator.shutdown();
  process.exit(0);
});

// Start server
async function startServer() {
  try {
    await orchestrator.initialize();
    
    // Start HTTP server
    app.listen(PORT, () => {
      logger.info(`🚀 YieldWars Orchestration Server running on port ${PORT}`);
      logger.info(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
      logger.info(`🔗 Network: ${process.env.NETWORK_NAME || 'sepolia'}`);
      logger.info(`📡 YieldWars Contract: ${process.env.ARENA_CONTRACT_ADDRESS}`);
    });
    
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();