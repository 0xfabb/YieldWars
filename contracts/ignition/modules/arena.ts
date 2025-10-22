import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ArenaFi", (m) => {
  const arena = m.contract("ArenaVault");
  return { arena };
});
