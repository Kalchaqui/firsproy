require("@nomicfoundation/hardhat-toolbox");

const { artifacts } = require("hardhat/config");
//const {mnemonic} = require('./secret.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "testnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    testnet: {
      url: "https://autumn-dry-layer.bsc-testnet.discover.quiknode.pro/ed96313aaab12e44cab61848ceed3db12dcc1de0/"
      //chainId: 97,
      //gasPrice: 20000000000,
      //accounts: {mnemonic: mnemonic}
    },
  },
  paths: {
    sources: "./contracts",
    test: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
