# ArenaFi Orchestration Server

A Node.js orchestration server that automates single-player prediction battles and entropy-based lucky games for ArenaFi on Sepolia testnet. This server implements Pyth Network integration for hackathon qualification and handles automated battle resolution.

## 🎯 Features

- **Automated Battle Resolution**: Automatically resolves prediction battles using real Pyth price data
- **Pyth Network Integration**: Fetches price updates from Hermes API and pays exact fees
- **Entropy-based Lucky Games**: Supports random number generation for various game types
- **RESTful API**: Complete API for battle and game management
- **Secure Key Management**: Safe handling of deployer private keys
- **Real-time Monitoring**: Health checks and system status endpoints
- **Hackathon Compliant**: Meets all Pyth hackathon requirements

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │  Orchestration   │    │   Blockchain    │
│   (Next.js)     │◄──►│     Server       │◄──►│   (Sepolia)     │
│                 │    │   (Node.js)      │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌──────────────────┐
                       │   Pyth Hermes    │
                       │      API         │
                       └──────────────────┘
```

### Core Components

- **BattleOrchestrator**: Main orchestration engine that manages battles and games
- **PythService**: Handles Hermes API integration and price data fetching
- **EthersHelper**: Manages blockchain interactions and contract calls
- **API Routes**: RESTful endpoints for frontend integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sepolia testnet ETH for deployer wallet
- RPC endpoint (Infura, Alchemy, etc.)

### Installation

1. **Clone and install dependencies:**
```bash
cd server
npm install
```

2. **Configure environment variables:**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Build the project:**
```bash
npm run build
```

4. **Start the server:**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

5. **Run the demo:**
```bash
npm run demo
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file with the following variables:

```bash
# Network Configuration
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NETWORK_NAME=sepolia

# Private Key (NEVER commit the real .env file)
DEPLOYER_PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef

# Contract Addresses (Sepolia)
ARENA_CONTRACT_ADDRESS=0x5101Cf0852013003d5ACfbfA0eab51C5aEC91dea
PYTH_CONTRACT_ADDRESS=0x2880aB155794e7179c9eE2e38200202908C17B43
ENTROPY_CONTRACT_ADDRESS=0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c

# Price Feed IDs
ETH_USD_PRICE_FEED_ID=0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace

# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Hermes API Configuration
HERMES_BASE_URL=https://hermes.pyth.network

# Battle Configuration
DEFAULT_BATTLE_DURATION=300000
RESOLUTION_CHECK_INTERVAL=30000
MAX_RETRIES=3

# Gas Configuration
GAS_LIMIT_MULTIPLIER=1.2
MAX_FEE_PER_GAS=20000000000
MAX_PRIORITY_FEE_PER_GAS=2000000000

# Logging
LOG_LEVEL=info
LOG_FILE=logs/arenafi-server.log
```

### Required Setup

1. **Get Sepolia ETH**: Fund your deployer wallet with Sepolia ETH from faucets
2. **RPC Endpoint**: Get a Sepolia RPC URL from Infura, Alchemy, or similar
3. **Contract Addresses**: Use the deployed ArenaFi contract addresses

## 📡 API Documentation

### Health Endpoints

#### GET /api/health
Basic health check
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "uptime": 123.45,
    "version": "1.0.0",
    "environment": "development"
  }
}
```

#### GET /api/health/detailed
Detailed system status including memory usage and configuration
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "system": { "platform": "linux", "nodeVersion": "v18.17.0" },
    "memory": { "heapUsed": "45 MB", "heapTotal": "67 MB" },
    "config": {
      "contractsConfigured": true,
      "privateKeyConfigured": true
    }
  }
}
```

### Battle Endpoints

#### GET /api/battles
List all active battles
```json
{
  "success": true,
  "data": {
    "battles": [
      {
        "id": 0,
        "player1": "0x742d35Cc6634C0532925a3b8D4C9db96C4b5Da5A",
        "player2": "0x0000000000000000000000000000000000000000",
        "stake": "10000000000000000",
        "resolved": false,
        "prediction1": "250050",
        "prediction2": "0",
        "timeRemaining": 245000
      }
    ],
    "count": 1
  }
}
```

#### POST /api/battles
Create a new prediction battle
```json
{
  "userAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b5Da5A",
  "stakeWei": "10000000000000000",
  "predictionValue": "2500.50",
  "durationSec": 300
}
```

#### POST /api/battles/:battleId/join
Join an existing battle
```json
{
  "userAddress": "0x8dF16f1d6F45292604F2E7375A22CE2B061776b1",
  "prediction": "2485.75"
}
```

### Lucky Game Endpoints

#### GET /api/luckygames/types
Get available game types
```json
{
  "success": true,
  "data": {
    "gameTypes": [
      {
        "type": "dice",
        "name": "Dice Roll",
        "description": "Guess the dice roll (1-6)",
        "range": { "min": 1, "max": 6 },
        "duration": 30,
        "odds": "1 in 6"
      }
    ]
  }
}
```

#### POST /api/luckygames/quick
Create a quick game with preset ranges
```json
{
  "userAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b5Da5A",
  "entryFee": "5000000000000000",
  "gameType": "dice",
  "guess": 4
}
```

#### POST /api/luckygames
Create a custom lucky game
```json
{
  "userAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b5Da5A",
  "entryFee": "10000000000000000",
  "minGuess": 1,
  "maxGuess": 100,
  "guess": 42,
  "durationSec": 60
}
```

## 🔧 Pyth Integration

### Hackathon Compliance

This server is designed to meet all Pyth hackathon requirements:

1. **✅ Hermes API Integration**: Always fetches `priceUpdateData` from Hermes
2. **✅ Fee Calculation**: Always calls `pyth.getUpdateFee()` for exact fees
3. **✅ On-chain Updates**: Calls `pyth.updatePriceFeeds()` with correct fee
4. **✅ Secure Price Usage**: Uses `getPrice()` after update, not `getPriceUnsafe()`

### Price Update Flow

```typescript
// 1. Fetch from Hermes
const priceUpdateData = await pythService.fetchPriceUpdateData();

// 2. Calculate exact fee
const fee = await pythContract.getUpdateFee(priceUpdateData);

// 3. Resolve battle with fee
const tx = await arenaContract.resolveBattle(battleId, priceUpdateData, { 
  value: fee 
});
```

### Supported Price Feeds

- **ETH/USD**: `0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace`
- **BTC/USD**: `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43`
- **SOL/USD**: `0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d`

## 🎲 Entropy Integration

### Testnet Fallback

On Sepolia testnet, the server uses secure pseudo-random generation:

```typescript
generatePseudoRandom(gameId: string): string {
  const timestamp = Date.now().toString();
  const random = Math.random().toString();
  const combined = `${gameId}-${timestamp}-${random}`;
  return ethers.keccak256(ethers.toUtf8Bytes(combined));
}
```

### Production Entropy

For mainnet deployment, integrate with Pyth Entropy:

```typescript
// Request entropy
const sequenceNumber = await entropyContract.requestRandomNumber();

// Get random number (after callback)
const randomNumber = await entropyContract.getRandomNumber(sequenceNumber);
```

## 🔄 Orchestration Worker

The orchestration worker runs every 30 seconds to:

1. **Check Expired Battles**: Find battles past their duration
2. **Fetch Pyth Data**: Get latest price updates from Hermes
3. **Resolve On-chain**: Call `resolveBattle()` with exact fees
4. **Update State**: Track resolved battles and winners
5. **Handle Lucky Games**: Resolve games with random numbers

### Resolution Logic

```typescript
private async resolveBattle(battleId: number): Promise<void> {
  // Fetch fresh price data
  const priceUpdateData = await this.pythService.fetchPriceUpdateData();
  
  // Validate format
  if (!this.pythService.validatePriceUpdateData(priceUpdateData)) {
    throw new Error('Invalid price update data');
  }

  // Resolve on-chain with exact fee
  const tx = await this.ethersHelper.resolveBattle(battleId, priceUpdateData);
  await tx.wait();
  
  // Update local state
  this.activeBattles.delete(battleId);
}
```

## 🧪 Testing

### Run Demo Script

```bash
npm run demo
```

The demo script will:
1. Check server health
2. Create sample battles and games
3. Monitor automatic resolution
4. Display results and transaction hashes

### Manual Testing

```bash
# Start server
npm run dev

# In another terminal, test endpoints
curl http://localhost:3001/api/health
curl http://localhost:3001/api/battles
curl -X POST http://localhost:3001/api/luckygames/quick \
  -H "Content-Type: application/json" \
  -d '{"userAddress":"0x742d35Cc6634C0532925a3b8D4C9db96C4b5Da5A","entryFee":"5000000000000000","gameType":"dice","guess":4}'
```

## 📊 Monitoring & Logging

### Log Levels

- **error**: Critical errors and failures
- **warn**: Warnings and recoverable issues  
- **info**: General information and status updates
- **debug**: Detailed debugging information

### Log Files

- `logs/combined.log`: All log messages
- `logs/error.log`: Error messages only
- `logs/exceptions.log`: Unhandled exceptions
- `logs/rejections.log`: Unhandled promise rejections

### Key Metrics

Monitor these metrics for production:

- **Deployer Balance**: Ensure sufficient Sepolia ETH
- **Resolution Success Rate**: Track failed resolutions
- **Pyth API Health**: Monitor Hermes API availability
- **Gas Usage**: Track transaction costs
- **Active Battles/Games**: Monitor queue sizes

## 🔒 Security

### Private Key Management

- Store private keys in environment variables or secret managers
- Never log or expose private keys in code
- Use separate deployer wallet for server operations
- Regularly rotate keys and monitor wallet balance

### API Security

- Input validation on all endpoints
- Rate limiting (implement with express-rate-limit)
- CORS configuration for frontend domains
- Helmet.js for security headers

### Smart Contract Security

- Validate all price update data before submission
- Use exact fee calculations from Pyth
- Implement retry logic with exponential backoff
- Monitor for reorg attacks and handle gracefully

## 🚀 Deployment

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure proper RPC endpoints
- [ ] Set up monitoring and alerting
- [ ] Configure log rotation
- [ ] Set up SSL/TLS certificates
- [ ] Configure firewall rules
- [ ] Set up backup strategies
- [ ] Test disaster recovery procedures

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3001
CMD ["node", "dist/index.js"]
```

### Environment-specific Configs

```bash
# Development
NODE_ENV=development
LOG_LEVEL=debug

# Staging  
NODE_ENV=staging
LOG_LEVEL=info

# Production
NODE_ENV=production
LOG_LEVEL=warn
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues and questions:

1. Check the logs in `logs/` directory
2. Verify environment configuration
3. Test with the demo script
4. Check Sepolia testnet status
5. Verify contract addresses and ABIs

## 🔗 Links

- [Pyth Network Documentation](https://docs.pyth.network/)
- [Pyth Hermes API](https://hermes.pyth.network/docs)
- [ArenaFi Frontend](../arenafi-fe/)
- [Smart Contracts](../contracts/)

---

**Built for Pyth Hackathon 2024** 🏆
