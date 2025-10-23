import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ArenaFi", (m) => {
  // Pyth contract addresses for Sepolia testnet
  const PYTH_CONTRACT_ADDRESS = "0x2880aB155794e7179c9eE2e38200202908C17B43"; // Pyth on Sepolia testnet
  const ENTROPY_CONTRACT_ADDRESS = "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c"; // Pyth Entropy (fallback address)

  const arena = m.contract("ArenaVault", [PYTH_CONTRACT_ADDRESS, ENTROPY_CONTRACT_ADDRESS]);
  return { arena };
});
