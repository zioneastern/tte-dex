require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

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
      url: `https:                                                      
      accounts: [
                                 
      ],
    },
    goerli: {
      url: `//mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [
        // Add your accounts here
      ],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
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