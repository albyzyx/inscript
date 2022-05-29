import { NFTStorage } from "nft.storage";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUyY0E4ZEJkRTM2NTEyMWE0MDVGMzE3OTA4MzFmMDNDNzEzOTc0ZTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MzcxNjI0NTY4OCwibmFtZSI6Imluc2NyaXB0In0._C7mwfCoCSBosVhb751EeY__vBIumVboxZbg_MBd5no",
});

export const uploadJSONToIpfs = async (obj: Object) => {
  const blob = new Blob([JSON.stringify(obj)], {
    type: "application/json",
  });
  console.log("uploading data to ipfs", obj);
  const cid = await client.storeBlob(blob);
  return cid;
};

export const getJSONFromIpfs = async (cid: string) => {
  return new Promise<any>((resolve, reject) => {
    fetch("https://nftstorage.link/ipfs/" + cid)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
};

export const uploadImageToIPFS = async (imageBlobURL: string) => {
  let blob = await fetch(imageBlobURL).then((r) => r.blob());
  const cid = await client.storeBlob(blob);
  return cid;
};
