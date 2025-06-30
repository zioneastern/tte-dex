require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.3.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  vyper: {
    version: "0.3.10",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts: [
        // Add your accounts here
      ],
    },
    mainnet: {
      url: "https:                                        
      accounts: [
                                 
      ],
    },
    testnet: {
      url: "//mainnet.infura.io/v3/YOUR_PROJECT_ID",
      accounts: [
        // Add your accounts here
      ],
    },
    testnet: {
      url: "https://testnet.infura.io/v3/YOUR_PROJECT_ID",
      accounts: [
        // Add your accounts here
      ],
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
};