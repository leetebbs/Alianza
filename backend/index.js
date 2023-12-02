require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Proposal = require("./models/proposals");
const port = process.env.PORT || 5000;

//Contract information
const {
  registrationNFTAddress,
  votingAddress,
} = require("./Utils/ContractsAddresses");
const { mumbaiNFTRegistrationABI, mumbaiVotingABI } = require("./Utils/Abis");
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_RPC_API_KEY
);
const nftRegestraionContract = new ethers.Contract(
  registrationNFTAddress,
  mumbaiNFTRegistrationABI,
  provider
);

const votingContract = new ethers.Contract(
  votingAddress,
  mumbaiVotingABI,
  provider
);

app.use(cors());
app.use(express.json());

//test address
const address = "0xBF3F821E4eE0cE0CDEce7d3141B7998769ffbFa6";

//test proposal
const proposal = new Proposal({
  project_title: "Test Project",
  project_id: 1,
  project_description: "Test Project Description",
  project_Info: "Test Project Info",
  constr_company: "Test Company",
  project_status: "Test Status",
  project_benefit: "Test Benefit",
  project_cost: 1000,
  project_env_impact: "Test Impact",
  project_progress: 25,
  project_support: 50,
  project_rejection: 50,
  project_location: "Test Location",
  project_image: "Test Image url",
});

//test endpoint
app.get("/", (req, res) => {
  res.send(proposal);
});

//get the balance of an nftowner
app.get("/balanceof", async (req, res) => {
  const balance = await nftRegestraionContract.balanceOf(address);
  res.send(balance.toString());
  console.log(balance.toString());
});
//get the proposals(index)
app.get("/getProposals", async (req, res) => {
  const proposals = await votingContract.proposals(0);
  res.json({
    name: proposals.name,
    scope: proposals.scope,
    forVotes: proposals.forVotes.toString(),
    againstVotes: proposals.againstVotes.toString(),
    deadline: proposals.deadline.toString(),
    hasAdminEnded: proposals.hasAdminEnded,
  });
  console.log(proposals);
});

//create a listener for new admins
async function admins() {
  const websocketProvider = new ethers.providers.WebSocketProvider(
    process.env.ALCHEMY_WS_API_KEY
  );
  const listenVotingcontract = new ethers.Contract(
    votingAddress,
    mumbaiVotingABI,
    websocketProvider
  );

  listenVotingcontract.on("AdminCreated", (address, event) => {
    let newAdminData = {
      AdminAddress: address,
      data: event,
    };
    console.log(JSON.stringify(newAdminData));
  });
}
admins();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
