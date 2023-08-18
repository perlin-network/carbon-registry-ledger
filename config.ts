import { config } from 'dotenv';
import { env } from 'process';

config({ path: './.env' });

interface AppConfig {
  infuraApiKey: string;
  walletPrivateKey: string;
  etherscanApiKey: string;
  proxyAddress: string | undefined;
}

const appConfig: AppConfig = {
  infuraApiKey: `${env.INFURA_API_KEY}`,
  walletPrivateKey: `0x${env.WALLET_PRIVATE_KEY}`,
  etherscanApiKey: `${env.ETHERSCAN_API_KEY}`,
  proxyAddress: env.PROXY_ADDRESS,
};

export default appConfig;
