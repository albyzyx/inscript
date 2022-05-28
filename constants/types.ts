export interface ChainCurrencyType {
  symbol: string;
  name: string;
  decimals: number;
  contractAddress: string;
  balance?: string;
}

export interface ChainType {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  chain_id: string;
  network_id: number;
  rpc_urls: string[];
  icon_url: String;
  block_explorer_url: string;
  native_currency: ChainCurrencyType;
}
