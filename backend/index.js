const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { registrationNFTAddress } = require("./Utils/ContractsAddresses");
const { mumbaiNFTRegistrationABI } = require("./Utils/Abis");
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://polygon-mumbai-pokt.nodies.app"
);
const nftRegestraionContract = new ethers.Contract(
  registrationNFTAddress,
  mumbaiNFTRegistrationABI,
  provider
);

app.use(cors());
app.use(express.json());

const address = "0xBF3F821E4eE0cE0CDEce7d3141B7998769ffbFa6";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//get the balance of an nftowner
app.get("/balanceof", async (req, res) => {
  const balance = await nftRegestraionContract.balanceOf(address);
  res.send(balance.toString());
  console.log(balance.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
