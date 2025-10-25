import dotenv from 'dotenv';

// Load test environment variables
dotenv.config({ path: '.env.test' });

// Set test timeout
jest.setTimeout(30000);

// Global test setup
beforeAll(async () => {
  console.log('🧪 Setting up ArenaFi integration tests...');
  console.log(`📊 Test environment: ${process.env.NODE_ENV || 'test'}`);
  
  // Verify required environment variables for integration tests
  const requiredVars = [
    'SEPOLIA_RPC_URL',
    'ARENA_CONTRACT_ADDRESS',
    'PYTH_CONTRACT_ADDRESS',
    'ENTROPY_CONTRACT_ADDRESS'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn(`⚠️ Missing environment variables: ${missingVars.join(', ')}`);
    console.warn('⚠️ Some integration tests will be skipped');
  }
});

afterAll(async () => {
  console.log('🧪 Cleaning up test environment...');
});

// Global error handler for tests
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});
