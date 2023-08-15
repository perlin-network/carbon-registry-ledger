import { HardhatUserConfig, task } from "hardhat/config";
import config from './config';
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const hardhatConfig: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: 'hardhat',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${config.infuraApiKey}`,
      accounts: [config.walletPrivateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${config.infuraApiKey}`,
      accounts: [config.walletPrivateKey]
    }
  },
  etherscan: {
    apiKey: config.etherscanApiKey,
  },
  typechain: {
    outDir: './types',
  },
};

export default hardhatConfig;
