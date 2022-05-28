const axios = require("axios");
const { NFTStorage } = require("nft.storage");

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUyY0E4ZEJkRTM2NTEyMWE0MDVGMzE3OTA4MzFmMDNDNzEzOTc0ZTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MzcxNjI0NTY4OCwibmFtZSI6Imluc2NyaXB0In0.C7mwfCoCSBosVhb751EeY_vBIumVboxZbg_MBd5no",
});

const uploadJSONToIpfs = async (obj) => {
  const blob = new Blob([JSON.stringify(obj)], {
    type: "application/json",
  });
  console.log("uploading data to ipfs", obj);
  const cid = await client.storeBlob(blob);
  return cid;
};

const getJSONFromIpfs = async (cid) => {
  return new Promise(async (resolve, reject) => {
    // console.log(cid);
    await axios
      .get("https://nftstorage.link/ipfs/" + cid)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

module.exports = { uploadJSONToIpfs, getJSONFromIpfs };
