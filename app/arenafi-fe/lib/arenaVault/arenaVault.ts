import { ethers } from "ethers";
import ArenaVaultAbi from "@/lib/abis/arenaabi.json";

const contractAddress = "0xEADC427fFE51D076Af599E5705856EF673297494";

export const getArenaVaultContract = (signerOrProvider: ethers.Provider | ethers.Signer) => {
  return new ethers.Contract(contractAddress, ArenaVaultAbi.abi, signerOrProvider);
};
