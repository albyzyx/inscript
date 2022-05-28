const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const InscriptArticleContract = await hre.ethers.getContractFactory(
    "InscriptArticle"
  );
  const inscriptArticleContract = await InscriptArticleContract.deploy();
  await inscriptArticleContract.deployed();
  console.log(
    "inscriptArticleContract deployed to:",
    inscriptArticleContract.address
  );

  fs.writeFileSync(
    "./config.js",
    `
  export const inscriptArticleContractAddress = "${inscriptArticleContract.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
