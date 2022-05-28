import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID,
      rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        56: "https://bsc-dataseed.binance.org/",
      },
    },
  },
};

export let web3Modal: Web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

export const web3ModalSingleton: {
  web3Modal: any;
  provider: any;
  web3Provider: any;
} = {
  web3Modal:
    typeof window !== "undefined"
      ? new Web3Modal({
          cacheProvider: true,
          providerOptions,
          theme: "dark",
        })
      : undefined,
  provider: null,
  web3Provider: null,
};

export const clearWeb3Modal = () => {
  web3ModalSingleton.web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: "dark",
  });
  web3ModalSingleton.provider = null;
  web3ModalSingleton.web3Provider = null;
};
