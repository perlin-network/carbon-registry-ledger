import { HardhatUserConfig, task } from "hardhat/config";
import config from './config';
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

task("getAccounts", "Get the list of accounts", async (_, { ethers }) => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

const hardhatConfig: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${config.infuraApiKey}`,
    },
  },
  etherscan: {
    apiKey: config.etherscanApiKey,
  },
  typechain: {
    outDir: './types',
  },
};

export default hardhatConfig;
