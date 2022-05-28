import { uploadJSONToIpfs } from "./ipfsHelper";

export const uploadArticleToIPFS = async (
  author_address: string,
  title: string,
  content: string
) => {
  const data = { author_address, title, content };
  const cid = await uploadJSONToIpfs(data);
  return cid;
};
