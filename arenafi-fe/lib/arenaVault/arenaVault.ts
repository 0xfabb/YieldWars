import { ethers } from "ethers";
import ArenaVaultAbi from "@/lib/abis/arenaabi.json";

const contractAddress = process.env.NEXT_PUBLIC_ARENAFI_CONTRACT || "0x5101Cf0852013003d5ACfbfA0eab51C5aEC91dea";

export const getArenaVaultContract = (signerOrProvider: ethers.Provider | ethers.Signer) => {
  return new ethers.Contract(contractAddress, ArenaVaultAbi, signerOrProvider);
};
