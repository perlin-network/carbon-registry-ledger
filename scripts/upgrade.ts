import { ethers, upgrades } from "hardhat";
import config from '../config';

async function main() {
  if (!config.proxyAddress){
    console.log("PerlLedger proxyAddress was not provided, cancelling...");
    return;
  }
      
  const PerlLedger = await ethers.getContractFactory("PerlLedgerV1");
  console.log(`Upgrading PerlLedger with proxy ${config.proxyAddress}...`);

  //await upgrades.forceImport(config.proxyAddress, PerlLedger);

  const updated = await upgrades.upgradeProxy(config.proxyAddress, PerlLedger);

  console.log("PerlLedger upgraded at ", await updated.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
