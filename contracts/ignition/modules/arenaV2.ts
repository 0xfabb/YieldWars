import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArenaV2Module = buildModule("ArenaV2Module", (m) => {
  // Sepolia testnet addresses
  const PYTH_CONTRACT_ADDRESS = "0x2880aB155794e7179c9eE2e38200202908C17B43";
  const ENTROPY_CONTRACT_ADDRESS = "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c";

  const arenaV2 = m.contract("ArenaVaultV2", [
    PYTH_CONTRACT_ADDRESS,
    ENTROPY_CONTRACT_ADDRESS
  ]);

  return { arenaV2 };
});

export default ArenaV2Module;
