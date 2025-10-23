import { ethers } from "ethers";
import ArenaVaultAbi from "@/lib/abis/arenaabi.json";

const contractAddress = process.env.NEXT_PUBLIC_ARENAFI_CONTRACT || "0x1f8a65105584eb0ed194f69B96ad1C1DC051BC55";

export const getArenaVaultContract = (signerOrProvider: ethers.Provider | ethers.Signer) => {
  return new ethers.Contract(contractAddress, ArenaVaultAbi, signerOrProvider);
};
