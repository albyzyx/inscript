require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: "V5S89Z8SAHTGM45ZNG6PWNG6QC1K8KT6HM",
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
