import { ethers, upgrades } from "hardhat";

async function main() {
  const PerlLedger = await ethers.getContractFactory("PerlLedger");
  console.log("Deploying PerlLedger...");

  const perlLedger = await upgrades.deployProxy(PerlLedger, [], { initializer: 'initialize' });
  const address = await perlLedger.getAddress();

  console.log("PerlLedger deployed to:", address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
