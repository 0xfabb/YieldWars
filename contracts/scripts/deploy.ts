import hre from "hardhat";
import buildModule from "../ignition/modules/arena.js"

async function main() {

  const network = await hre.network.connect();
  const {arena} = await network.ignition.deploy(buildModule);

 console.log(`ArenaFi deployed to: ${arena.address}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
