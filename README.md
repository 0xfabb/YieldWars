# YieldWars 🎯

**Real-time ETH price prediction battles powered by Pyth Network**

[![Demo](https://img.shields.io/badge/Live%20Demo-arena--fi--oryx.vercel.app-blue)](https://arena-fi-oryx.vercel.app/)
[![Repository](https://img.shields.io/badge/GitHub-0xfabb%2FyieldWars-green)](http://github.com/0xfabb/yieldWars)
[![Pyth Network](https://img.shields.io/badge/Powered%20by-Pyth%20Network-orange)](https://pyth.network/)
[![Hardhat](https://img.shields.io/badge/Built%20with-Hardhat%203-yellow)](https://hardhat.org/)

## What is YieldWars?

YieldWars is a revolutionary DeFi gaming platform that transforms price prediction into an engaging, real-time battle experience. Players stake Sepolia ETH and predict short-term ETH price movements (60-300 seconds), with outcomes determined by authentic Pyth Network price feeds.

### Core Concept

- **Predict**: Will ETH price go up or down in the next 1-5 minutes?
- **Stake**: Put your Sepolia ETH where your prediction is
- **Battle**: Real-time price feeds from Pyth Network determine winners
- **Win**: Accurate predictions earn rewards from the prize pool

### Key Innovation

YieldWars demonstrates the perfect marriage of **DeFi gaming** and **oracle technology**:

1. **Real-time Data**: Live ETH price feeds from Pyth Network's Hermes API
2. **Verifiable Outcomes**: On-chain price resolution using Pyth Solidity SDK
3. **Cost-Optimized**: Dual network architecture (Sepolia + Mainnet)
4. **Transparent**: All predictions and resolutions are on-chain and verifiable

## ETH Global Prize Partners Integration

### 🐍 Pyth Network Integration

**Rating: 10/10** - Exceptional developer experience with low latency and smooth integration

#### How We Use Pyth Network:

1. **Frontend Visualization**:
   - Real-time ETH/USD price feeds via Pyth Hermes API
   - Live price charts and market data display
   - Price feed ID: `0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace`

2. **Smart Contract Resolution**:
   ```solidity
   // Core Pyth integration in ArenaVaultV2.sol
   import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
   import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
   
   // Battle resolution workflow:
   // 1. getUpdateFee() - Calculate exact fee for price update
   // 2. updatePriceFeeds() - Push latest Hermes data on-chain
   // 3. getPrice() - Get verified price for battle resolution
   ```

3. **Server Orchestration**:
   ```typescript
   // server/src/services/PythService.ts
   // Automated battle resolution using Pyth price feeds
   const fee = await pythContract.getUpdateFee(priceUpdateData);
   await pythContract.updatePriceFeeds(priceUpdateData, { value: fee });
   const price = await pythContract.getPrice(ETH_USD_PRICE_FEED_ID);
   ```

#### Pyth Network Benefits:
- **Ultra-low latency**: Perfect for short-term prediction games
- **Transparent pricing**: Dynamic fee calculation via `getUpdateFee()`
- **Verifiable data**: Cryptographically signed price feeds
- **Developer-friendly**: Seamless Hermes API + Solidity SDK integration

#### Technical Implementation:
- **Frontend**: `@pythnetwork/hermes-client` for real-time price visualization
- **Smart Contracts**: `@pythnetwork/pyth-sdk-solidity` for on-chain price resolution
- **Server**: Automated price feed updates and battle resolution
- **Networks**: Dual architecture (Sepolia for battles, Mainnet for Pyth data)

### 🔨 Hardhat 3 Integration

**Complete smart contract development lifecycle powered by Hardhat 3**

#### How We Use Hardhat:

1. **Smart Contract Development**:
   ```javascript
   // hardhat.config.ts - Hardhat 3 configuration
   import { HardhatUserConfig } from "hardhat/config";
   import "@nomicfoundation/hardhat-toolbox-viem";
   import "@nomicfoundation/hardhat-ignition";
   ```

2. **Contract Deployment**:
   ```typescript
   // contracts/ignition/modules/arenaV2.ts
   // Hardhat Ignition for deterministic deployments
   const arenaV2 = m.contract("ArenaVaultV2", [pythAddress, entropyAddress]);
   ```

3. **Testing & Verification**:
   - Local Hardhat network for development
   - Sepolia testnet deployment and verification
   - Integration testing with Pyth price feeds

#### Hardhat 3 Benefits:
- **Modern tooling**: Latest Hardhat with Viem integration
- **Ignition deployment**: Deterministic, resumable deployments
- **TypeScript support**: Full type safety across the stack
- **Plugin ecosystem**: Seamless integration with Pyth SDK

## Architecture Overview

### System Components

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Server        │    │ Smart Contracts │
│   (Next.js)     │    │ (Orchestrator)  │    │   (Solidity)    │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • Battle UI     │◄──►│ • Battle Monitor│◄──►│ • ArenaVaultV2  │
│ • Price Charts  │    │ • Auto-Resolver │    │ • Pyth Consumer │
│ • Wallet Connect│    │ • Pyth Service  │    │ • Entropy Games │
│ • MetaMask SDK  │    │ • API Endpoints │    │ • Event Emitter │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │  Pyth Network   │
                    │ (Price Feeds)   │
                    ├─────────────────┤
                    │ • Hermes API    │
                    │ • Price Updates │
                    │ • Fee Calculation│
                    │ • Verification  │
                    └─────────────────┘
```

### Dual Network Architecture

**Cost-Optimized Hybrid Approach:**

- **Sepolia Network**: 
  - YieldWars contract deployment
  - Battle creation and management
  - User interactions (FREE testnet ETH)
  
- **Mainnet Network**:
  - Pyth Network price feeds
  - Authentic price data resolution
  - Minimal fees for price updates

### Smart Contract Suite

1. **ArenaVaultV2.sol** - Main battle contract
   - Single-player prediction battles
   - Pyth price feed integration
   - Automated server resolution
   - Event emission for monitoring

2. **Pyth Integration** - Oracle connectivity
   - Real-time price feed consumption
   - Dynamic fee calculation
   - Secure price verification

3. **Entropy Integration** - Random number generation
   - Lucky games and random events
   - Verifiable randomness

## Technology Stack

### Frontend (Next.js 15)
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Web3**: Ethers.js, MetaMask SDK, WalletConnect
- **State**: React hooks, Supabase for user management
- **Charts**: Real-time price visualization
- **Deployment**: Vercel

### Backend (Node.js + TypeScript)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js API server
- **Orchestration**: Automated battle resolution
- **Monitoring**: 30-second polling for expired battles
- **Logging**: Winston with structured logging
- **Database**: Supabase PostgreSQL

### Smart Contracts (Solidity)
- **Language**: Solidity ^0.8.28
- **Framework**: Hardhat 3 with Ignition
- **Oracles**: Pyth Network SDK
- **Networks**: Sepolia (contracts) + Mainnet (Pyth)
- **Testing**: Hardhat + Viem integration

### Infrastructure
- **RPC**: Infura (Sepolia) + Alchemy (Mainnet)
- **Deployment**: Hardhat Ignition
- **Monitoring**: Real-time event listening
- **Security**: Environment variable management

## Getting Started

### Prerequisites
- Node.js 18+
- MetaMask wallet
- Sepolia ETH (from faucet)
- Git

### Installation

1. **Clone Repository**:
   ```bash
   git clone https://github.com/0xfabb/yieldWars.git
   cd yieldWars
   ```

2. **Install Dependencies**:
   ```bash
   # Frontend
   cd arenafi-fe
   npm install
   
   # Contracts
   cd ../contracts
   npm install
   
   # Server
   cd ../server
   npm install
   ```

3. **Environment Setup**:
   ```bash
   # Copy environment templates
   cp .env.example .env
   
   # Configure your environment variables:
   # - SEPOLIA_RPC_URL (Infura/Alchemy)
   # - MAINNET_RPC_URL (for Pyth)
   # - PRIVATE_KEY (your wallet)
   # - ARENA_CONTRACT_ADDRESS
   # - PYTH_CONTRACT_ADDRESS
   ```

4. **Deploy Contracts** (Optional):
   ```bash
   cd contracts
   npx hardhat ignition deploy ignition/modules/arenaV2.ts --network sepolia
   ```

5. **Start Development**:
   ```bash
   # Terminal 1: Frontend
   cd arenafi-fe && npm run dev
   
   # Terminal 2: Server
   cd server && npm run dev
   
   # Terminal 3: Demo
   cd contracts && node systemDemo.mjs
   ```

### Live Demo

**🚀 [Try YieldWars Live](https://arena-fi-oryx.vercel.app/)**

1. Connect your MetaMask wallet
2. Switch to Sepolia network
3. Get Sepolia ETH from faucet
4. Create your first yield prediction battle
5. Watch real-time price resolution!

## Future Roadmap

### Phase 1: Enhanced Gaming (Q1 2025)
- **Multi-timeframe battles**: 1min, 5min, 15min, 1hour predictions
- **Advanced strategies**: Stop-loss, take-profit mechanisms
- **Social features**: Leaderboards, achievements, user profiles
- **Mobile app**: React Native with same core functionality

### Phase 2: DeFi Integration (Q2 2025)
- **Yield farming**: Stake LP tokens to earn battle credits
- **Governance token**: $YIELD token for platform governance
- **Cross-chain expansion**: Arbitrum, Polygon, Base support
- **Liquidity mining**: Rewards for providing battle liquidity

### Phase 3: Advanced Features (Q3 2025)
- **Multi-asset predictions**: BTC, SOL, MATIC price battles
- **Team battles**: Collaborative prediction pools
- **AI integration**: ML-powered prediction insights
- **Institutional features**: API access for trading firms

### Phase 4: Ecosystem Expansion (Q4 2025)
- **White-label solution**: YieldWars SDK for other platforms
- **Educational platform**: Learn-to-earn prediction tutorials
- **Professional tools**: Advanced analytics and backtesting
- **Global tournaments**: Seasonal competitions with major prizes

## What We Need to Continue

### Funding Requirements

#### 🌱 **Seed Funding ($250K - $500K)**
**Immediate Needs:**
- **Team Expansion**: 2-3 additional developers (frontend, smart contracts, backend)
- **Security Audits**: Professional smart contract audits ($50K-$100K)
- **Infrastructure**: Production-grade servers, monitoring, CDN
- **Legal & Compliance**: Regulatory guidance for gaming/DeFi hybrid
- **Marketing**: Community building, influencer partnerships

#### 🚀 **Series A ($2M - $5M)**
**Growth Phase:**
- **Product Development**: Mobile app, advanced features, multi-chain
- **Business Development**: Exchange partnerships, institutional clients
- **Regulatory**: Legal framework for global expansion
- **Team Scaling**: 10-15 person team across all functions

### Partnership Opportunities

#### 🤝 **Technical Partnerships**
- **Pyth Network**: Deeper integration, custom price feeds, co-marketing
- **Hardhat/Consensys**: Developer tooling partnerships
- **Wallet Providers**: MetaMask, WalletConnect, Coinbase Wallet integrations
- **Infrastructure**: Infura, Alchemy, The Graph partnerships

#### 🏢 **Strategic Partnerships**
- **DeFi Protocols**: Uniswap, Aave, Compound integration
- **Gaming Platforms**: Collaboration with existing crypto gaming ecosystems
- **Educational**: Partnerships with crypto education platforms
- **Media**: Crypto news outlets, YouTube channels, podcasts

### Accelerator Programs

#### 🎯 **Target Accelerators**
1. **Consensys Mesh**: Ethereum ecosystem focus
2. **Binance Labs**: Global reach and exchange integration
3. **Coinbase Ventures**: US market and compliance expertise
4. **Pantera Capital**: DeFi and gaming expertise
5. **Andreessen Horowitz (a16z)**: Crypto fund with gaming focus

#### 🎓 **Mentorship Needs**
- **DeFi/Gaming Hybrid**: Regulatory and product guidance
- **Tokenomics**: Sustainable token economy design
- **Go-to-Market**: User acquisition in crypto gaming
- **Technical Architecture**: Scaling blockchain gaming platforms
- **Business Development**: Partnership strategy and execution

### Grant Opportunities

#### 💰 **Ecosystem Grants**
- **Ethereum Foundation**: $50K-$200K for ecosystem development
- **Pyth Network**: Developer grants for innovative integrations
- **Polygon**: Grants for multi-chain expansion
- **Arbitrum**: Layer 2 development grants
- **Base**: Coinbase ecosystem grants

#### 🔬 **Research Grants**
- **Academic Partnerships**: University research on prediction markets
- **Open Source**: Grants for open-sourcing core components
- **Developer Tools**: Building tools for other prediction game developers

## Why YieldWars Will Succeed

### Market Opportunity
- **$2.8B+ Prediction Market Size** (growing 15% annually)
- **$15B+ Crypto Gaming Market** (growing 25% annually)
- **Convergence Opportunity**: First to truly merge DeFi + Gaming + Oracles

### Competitive Advantages
1. **Real Oracle Integration**: Not simulated - actual Pyth Network price feeds
2. **Cost Optimization**: Dual network architecture minimizes user costs
3. **Developer Experience**: Built with modern tools (Hardhat 3, Next.js 15)
4. **Scalable Architecture**: Server orchestration handles high throughput
5. **Regulatory Clarity**: Prediction games vs. gambling distinction

### Technical Excellence
- **10/10 Pyth Integration**: Seamless oracle integration
- **Production Ready**: Full CI/CD, monitoring, error handling
- **Open Source**: Transparent, auditable, community-driven
- **Modular Design**: Easy to extend and customize

### Team Commitment
- **Hackathon Proven**: Delivered working product in limited time
- **Full-Stack Expertise**: Frontend, backend, smart contracts, DevOps
- **Continuous Innovation**: Already planning v2 features
- **Community First**: Open source, transparent development

## Contact & Links

- **🌐 Website**: [arena-fi-oryx.vercel.app](https://arena-fi-oryx.vercel.app/)
- **📱 Repository**: [github.com/0xfabb/yieldWars](http://github.com/0xfabb/yieldWars)
- **📧 Contact**: [Your Email]
- **🐦 Twitter**: [Your Twitter]
- **💬 Discord**: [Your Discord]

## Technical Documentation

### Contract Addresses (Sepolia)
- **YieldWars Main**: `0x63FE4008cfE9DF33D0481189E315da267Fc30eFc`
- **Pyth Oracle**: `0x2880aB155794e7179c9eE2e38200202908C17B43`
- **Entropy**: `0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c`

### API Endpoints
- **Health Check**: `GET /api/health`
- **Battle Creation**: `POST /api/battles`
- **Battle History**: `GET /api/battles`
- **Lucky Games**: `POST /api/lucky-games`

### Price Feed Integration
```typescript
// ETH/USD Price Feed ID
const ETH_USD_PRICE_FEED_ID = "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace";

// Hermes API Integration
const response = await fetch(`https://hermes.pyth.network/v2/updates/price/latest?ids[]=${priceId}&encoding=hex`);
const priceData = response.json();

// On-chain Resolution
const fee = await pythContract.getUpdateFee(priceUpdateData);
await pythContract.updatePriceFeeds(priceUpdateData, { value: fee });
const price = await pythContract.getPrice(ETH_USD_PRICE_FEED_ID);
```

---

**YieldWars: Where prediction meets precision, powered by Pyth Network** 🎯

*Built with ❤️ for ETH Global and the future of DeFi gaming*
