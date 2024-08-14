require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`2f5fc1ca09d4c7f926a7f569ef71dca90b78cb2f9d9ceb9aa547d909a58cc620`],
    },
  },
};
