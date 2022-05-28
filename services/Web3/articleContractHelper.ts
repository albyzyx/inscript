import { ethers } from "ethers";
import { clearWeb3Modal, web3ModalSingleton } from "./web3Modal";

import { inscriptArticleContractAddress } from "../../config";
import InscriptArticle from "../../artifacts/contracts/InscriptArticle.sol/InscriptArticle.json";

async function getContract() {
  const provider = web3ModalSingleton.provider;
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    inscriptArticleContractAddress,
    InscriptArticle.abi,
    signer
  );
  return contract;
}

export const mintArticleNft = async (ipfsUri: string) => {
  const contract = await getContract();
  const transaction = await contract.createToken(ipfsUri);
  await transaction.wait();
};
