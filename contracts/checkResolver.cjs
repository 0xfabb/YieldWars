const hre = require("hardhat");

async function main() {
  const contractAddress = "0xfE3A48A1A8c7a4E51F7027C6563C7E4BE726923B";
  const serverWallet = "0x597CE9C71F24f3fA0b7a5B30D2708e4a3c05B70D";
  
  console.log("🔍 Checking current resolver...");
  
  // Get contract instance
  const contract = await hre.ethers.getContractAt("ArenaVaultV2", contractAddress);
  
  // Check current resolver
  const currentResolver = await contract.resolver();
  console.log("Current resolver:", currentResolver);
  console.log("Server wallet:  ", serverWallet);
  console.log("Match:", currentResolver.toLowerCase() === serverWallet.toLowerCase());
  
  if (currentResolver.toLowerCase() !== serverWallet.toLowerCase()) {
    console.log("\n🔧 Setting resolver to server wallet...");
    
    try {
      const tx = await contract.setResolver(serverWallet);
      console.log("Transaction sent:", tx.hash);
      
      console.log("⏳ Waiting for confirmation...");
      await tx.wait();
      
      // Verify
      const newResolver = await contract.resolver();
      console.log("✅ Resolver updated to:", newResolver);
      
      if (newResolver.toLowerCase() === serverWallet.toLowerCase()) {
        console.log("🎉 SUCCESS: Resolver set correctly!");
      } else {
        console.log("❌ ERROR: Resolver not set correctly");
      }
    } catch (error) {
      console.error("❌ Failed to set resolver:", error.message);
    }
  } else {
    console.log("✅ Resolver is already set correctly!");
  }
}

main().catch(console.error);
