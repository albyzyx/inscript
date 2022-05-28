import { NFTStorage } from "nft.storage";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUyY0E4ZEJkRTM2NTEyMWE0MDVGMzE3OTA4MzFmMDNDNzEzOTc0ZTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MzcxNjI0NTY4OCwibmFtZSI6Imluc2NyaXB0In0.C7mwfCoCSBosVhb751EeY_vBIumVboxZbg_MBd5no",
});

export const uploadJSONToIpfs = async (obj) => {
  const blob = new Blob([JSON.stringify(obj)], {
    type: "application/json",
  });
  console.log("uploading data to ipfs", obj);
  const cid = await client.storeBlob(blob);
  return cid;
};

export const getJSONFromIpfs = async (cid) => {
  return new Promise((resolve, reject) => {
    fetch("https://nftstorage.link/ipfs/" + cid)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
};
