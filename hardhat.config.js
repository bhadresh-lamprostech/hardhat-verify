require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
// require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const privateKeys = {
  mode: "0x81477524c684392ff2da8ab93bc164a4a9852a99805c460e539e4f0d82a852ae", // Replace with your private key for the mode network
};

module.exports = {
  solidity: "0.8.10",

  networks: {
    mode: {
      url: "https://sepolia.mode.network/", // URL of the mode network
      accounts: [privateKeys.mode], // Array of private keys to use for deployment
      gasPrice: 35000000000, // Gas price for transactions on this network
      saveDeployments: true, // Save deployment information
    },
  },

  etherscan: {
    apiKey: {
      mode: "1B4GIPZDBAPNJ1FXE8799S1I7M2277QNJ4", // Replace with your actual API key
    },
    customChains: [
      {
        network: "mode", // Use the same network name as defined in networks
        chainId: 919, // Replace with the actual chain ID of the mode network
        urls: {
          apiURL: "https://sepolia.explorer.mode.network/api", // API URL for the mode network
          browserURL: "https://sepolia.explorer.mode.network/", // Browser URL for the mode network
        },
      },
    ],
  },
};
