import * as dotenv from "dotenv";

import "tsconfig-paths/register";

import type { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "./tasks";

dotenv.config();

const accounts =
  process.env.WALLET_PRIVATE_KEY !== undefined
    ? [process.env.WALLET_PRIVATE_KEY]
    : [];

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    localhost: {
      live: false,
      saveDeployments: true,
    },
    hardhat: {
      live: false,
      saveDeployments: true,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    munbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: accounts,
      saveDeployments: true,
    },
    xdai: {
      url: "https://rpc.xdaichain.com/",
      accounts: accounts,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: accounts,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: accounts,
    },
    testnetHarmony: {
      url: "https://api.s0.b.hmny.io",
      gasPrice: 1000000000,
      chainId: 1666700000,
      accounts: accounts,
    },
    harmony: {
      url: "https://api.harmony.one",
      gasPrice: 1000000000,
      chainId: 1666600000,
      accounts: accounts,
    },
  },
  abiExporter: {
    path: "./abi",
    clear: true,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: true,
  },
};

export default config;
