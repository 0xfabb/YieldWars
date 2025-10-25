import express from 'express';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('HealthRoutes');

export const healthRoutes = express.Router();

// GET /api/health - Basic health check
healthRoutes.get('/', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

// GET /api/health/detailed - Detailed system status
healthRoutes.get('/detailed', async (req, res) => {
  try {
    const memoryUsage = process.memoryUsage();
    
    res.json({
      success: true,
      data: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        system: {
          platform: process.platform,
          arch: process.arch,
          nodeVersion: process.version,
          pid: process.pid
        },
        memory: {
          rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
          heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
          heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
          external: `${Math.round(memoryUsage.external / 1024 / 1024)} MB`
        },
        config: {
          port: process.env.PORT || 3001,
          network: process.env.NETWORK_NAME || 'sepolia',
          rpcConfigured: !!process.env.SEPOLIA_RPC_URL,
          contractsConfigured: !!(
            process.env.ARENA_CONTRACT_ADDRESS &&
            process.env.PYTH_CONTRACT_ADDRESS &&
            process.env.ENTROPY_CONTRACT_ADDRESS
          ),
          privateKeyConfigured: !!process.env.DEPLOYER_PRIVATE_KEY
        }
      }
    });

  } catch (error) {
    logger.error('Health check failed:', error);
    res.status(500).json({
      success: false,
      error: 'Health check failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// GET /api/health/ready - Readiness probe
healthRoutes.get('/ready', (req, res) => {
  const requiredEnvVars = [
    'SEPOLIA_RPC_URL',
    'DEPLOYER_PRIVATE_KEY',
    'ARENA_CONTRACT_ADDRESS',
    'PYTH_CONTRACT_ADDRESS',
    'ENTROPY_CONTRACT_ADDRESS'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    return res.status(503).json({
      success: false,
      error: 'Service not ready',
      message: `Missing required environment variables: ${missingVars.join(', ')}`
    });
  }

  res.json({
    success: true,
    data: {
      status: 'ready',
      timestamp: new Date().toISOString(),
      message: 'Service is ready to accept requests'
    }
  });
});

// GET /api/health/live - Liveness probe
healthRoutes.get('/live', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'alive',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    }
  });
});
