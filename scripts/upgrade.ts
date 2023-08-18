import { ethers, upgrades } from "hardhat";
import config from '../config';

async function main() {
  if (!config.proxyAddress){
    console.log("PerlLedger proxyAddress was not provided, cancelling...");
    return;
  }
      
  const PerlLedger = await ethers.getContractFactory("PerlLedger");
  console.log("Upgrading PerlLedger...");

  await upgrades.upgradeProxy(config.proxyAddress, PerlLedger);

  console.log("PerlLedger upgraded");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
