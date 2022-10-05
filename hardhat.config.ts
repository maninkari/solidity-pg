import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
       url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, 
       accounts: [`${process.env.GOERLI_PRIVATE_KEY}`],
    }
  }
};
