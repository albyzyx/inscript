import { ethers } from "ethers";
import { ChainType } from "./types";

export const ChainTypeKeyArray = ["MATIC"] as const;

export type ChainTypeKey = typeof ChainTypeKeyArray[number];

export const initChain: ChainTypeKey = "MATIC";

type ChainTypeObject = {
  [k in ChainTypeKey]: ChainType;
};

export const supportedChains: { MATIC: ChainType } = {
  MATIC: {
    name: "Mumbai Testnet",
    short_name: "Polygon",
    chain: "MATIC",
    network: "testnet",
    chain_id: "0x13881",
    network_id: 1,
    rpc_urls: ["https://rpc-mumbai.maticvigil.com"],
    icon_url: "",
    block_explorer_url: "https://testnet.bscscan.com/",
    native_currency: {
      symbol: "MATIC",
      name: "MATIC",
      decimals: 18,
      contractAddress: "",
      balance: "",
    },
  },
};

export const getChain = (chain: ChainTypeKey) => supportedChains[chain];

export const getNameAndIcon = (chainData: ChainType) => {
  return {
    name: chainData.name,
    shortName: chainData.short_name,
    Symbol: chainData.chain,
    icon: chainData.icon_url,
  };
};

export const getMainnets = (chainDatas: ChainType[]) => {
  return chainDatas.filter((chainData) => chainData.network !== "testnet");
};

export const getTestnets = (chainDatas: ChainType[]) => {
  return chainDatas.filter((chainData) => chainData.network === "testnet");
};
