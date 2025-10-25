import { ethers } from "ethers";

const RPC_URL = "https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const CONTRACT_ADDRESS = "0xfE3A48A1A8c7a4E51F7027C6563C7E4BE726923B";
const SERVER_WALLET = "0x597CE9C71F24f3fA0b7a5B30D2708e4a3c05B70D";

// Simple ABI for the resolver function
const ABI = [
  "function resolver() view returns (address)",
  "function setResolver(address _resolver)"
];

async function checkResolver() {
  try {
    console.log("🔍 Checking resolver status...");
    
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
    
    const currentResolver = await contract.resolver();
    
    console.log("Contract:", CONTRACT_ADDRESS);
    console.log("Current resolver:", currentResolver);
    console.log("Server wallet:  ", SERVER_WALLET);
    console.log("Match:", currentResolver.toLowerCase() === SERVER_WALLET.toLowerCase());
    
    if (currentResolver === "0x0000000000000000000000000000000000000000") {
      console.log("❌ No resolver set!");
    } else if (currentResolver.toLowerCase() !== SERVER_WALLET.toLowerCase()) {
      console.log("❌ Resolver is set to wrong address!");
    } else {
      console.log("✅ Resolver is correctly set!");
    }
    
  } catch (error) {
    console.error("Error:", error.message);
  }
}

checkResolver();
