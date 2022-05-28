import { web3ModalSingleton } from "./web3Modal";

import { ChainType } from "../../constants/types";

import { getWeb3Provider } from "./web3Auth";

interface AddEthereumChainParameter {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export const requestChainChange = async (chain: ChainType) => {
  const provider = await web3ModalSingleton.web3Modal.connect();

  try {
    if (provider.chainId !== chain.chain_id) {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chain.chain_id }],
      });
    } else {
      throw new Error("same network");
    }
  } catch (switchError: any) {
    if (switchError.code === 4902) {
      const newChain: AddEthereumChainParameter = {
        chainId: chain.chain_id,
        chainName: chain.name,
        rpcUrls: chain.rpc_urls,
        blockExplorerUrls: [chain.block_explorer_url],
        nativeCurrency: {
          name: chain.native_currency.name,
          symbol: chain.native_currency.symbol,
          decimals: chain.native_currency.decimals,
        },
      };
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [newChain],
        });
      } catch (addError: any) {
        throw new Error(addError);
      }
    }
    // alert("Change network in wallet");
    throw new Error(switchError);
  }
};
