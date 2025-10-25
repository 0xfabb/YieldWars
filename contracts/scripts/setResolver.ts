import hre from "hardhat";

async function main() {
  // Contract address from deployment
  const contractAddress = "0xfE3A48A1A8c7a4E51F7027C6563C7E4BE726923B" as `0x${string}`;
  
  // Server wallet address (from server's private key)
  const resolverAddress = "0x1Be31A94361a391bBaFB2a4CCd704F57dc04d4bb" as `0x${string}`;
  
  console.log("Setting resolver for ArenaVaultV2...");
  console.log("Contract:", contractAddress);
  console.log("Resolver:", resolverAddress);
  
  // Get contract instance using Viem
  const contract = await hre.viem.getContractAt("ArenaVaultV2", contractAddress);
  
  // Set resolver
  const tx = await contract.write.setResolver([resolverAddress]);
  console.log("Transaction sent:", tx);
  
  // Get public client to wait for transaction
  const publicClient = await hre.viem.getPublicClient();
  const receipt = await publicClient.waitForTransactionReceipt({ hash: tx });
  console.log("✅ Resolver set successfully! Block:", receipt.blockNumber);
  
  // Verify the resolver was set
  const currentResolver = await contract.read.resolver();
  console.log("Current resolver:", currentResolver);
  
  if (currentResolver.toLowerCase() === resolverAddress.toLowerCase()) {
    console.log("✅ Resolver verification successful!");
  } else {
    console.log("❌ Resolver verification failed!");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
