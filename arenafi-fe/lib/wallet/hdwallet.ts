import {HDNodeWallet} from "ethers";
import {mnemonicToSeedSync} from "bip39"
import {MNEMONIC} from "./config";
import { createHash } from "crypto";

export const createWalletCore = async (userId: string) => {
    const indexFromUserId = parseInt(
        createHash('sha256').update(userId).digest('hex').slice(0, 8),
        16
      ) % 2147483648; // fits in 31 bits
      
    const seed = mnemonicToSeedSync(MNEMONIC);  
    const hdNode = HDNodeWallet.fromSeed(seed);
    
    const wallet = hdNode.derivePath(`m/44'/60'/${indexFromUserId}/0`);
    console.log(wallet.address);    
    
    return {wallet, userId};
}