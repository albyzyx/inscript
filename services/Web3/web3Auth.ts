import { providers } from "ethers";
import { clearWeb3Modal, web3ModalSingleton } from "./web3Modal";

export const getWeb3Provider = () => {
  return new Promise<providers.Web3Provider>(async (resolve, reject) => {
    let provider;
    let web3Provider;
    if (web3ModalSingleton.provider) {
      provider = web3ModalSingleton.provider;
    } else {
      provider = await web3ModalSingleton.web3Modal.connect();
      web3ModalSingleton.provider = provider;
    }

    if (web3ModalSingleton.web3Provider) {
      web3Provider = web3ModalSingleton.web3Provider;
    } else {
      web3Provider = new providers.Web3Provider(provider);
      web3ModalSingleton.web3Provider = web3Provider;
    }

    resolve(web3Provider);
  });
};

export const getConnectedAddress = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const web3Provider = await getWeb3Provider();
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    resolve(address);
  });
};

export const getConnectedBalance = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const web3Provider = await getWeb3Provider();
    const signer = web3Provider.getSigner();
    const balance = await signer.getBalance();
    resolve(balance);
  });
};

export const walletConnect = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const web3Provider = await getWeb3Provider();
    const signer = web3Provider.getSigner();
    const balance = await signer.getBalance();
    const address = await signer.getAddress();
    resolve({ address, balance: balance._hex });
  });
};

export const walletConnectIfCache = async () => {
  if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") === '"injected"') {
    return walletConnect();
  }
  throw new Error("No Cache");
};

export const walletDisconnect = () => {
  if (web3ModalSingleton.web3Modal) {
    web3ModalSingleton.web3Modal.clearCachedProvider();
  }

  // clearWeb3Modal();
  return;
};
