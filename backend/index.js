require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Proposal = require("./models/proposals");
const WorkData = require("./models/work_data");
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["https://alianza-hazel.vercel.app", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

// Connection to MongoDB using Mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

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

const nftRegistrationContract = new ethers.Contract(
  registrationNFTAddress,
  mumbaiNFTRegistrationABI,
  provider
);

const votingContract = new ethers.Contract(
  votingAddress,
  mumbaiVotingABI,
  provider
);

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
  try {
    const balance = await nftRegistrationContract.balanceOf(address);
    res.send(balance.toString());
    console.log(balance.toString());
  } catch (error) {
    console.error("Error getting balance of NFT owner:", error);
    res.status(500).json({ error: "Failed to get NFT balance" });
  }
});

// Update the getProposals endpoint to fetch all proposals
app.get("/getProposals", async (req, res) => {
  try {
    // Fetch all proposals from the MongoDB database
    const proposals = await Proposal.find();
    res.json(proposals);
    console.log("Fetched proposals:", proposals);
  } catch (error) {
    console.error("Error getting proposals:", error);
    res.status(500).json({ error: "Failed to get proposals" });
  }
});

app.options("/createProposal", cors(corsOptions));
app.post("/createProposal", cors(corsOptions), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");
  try {
    const data = req.body;
    console.log(data);
    res.json({ status: "success", data: req.body });
  } catch (error) {
    console.error("Error creating proposal:", error);
    res.status(500).json({ error: "Failed to create proposal" });
  }
});

app.get('/getworkdatas', (req, res) => {
 WorkData.find({})
   .then(data => {
      console.log(data); // Agrega este console.log para verificar los datos recuperados
      res.json(data);
    })
    .catch(err => res.json(err));
});

//Creating a listener for NFT minting
nftRegistrationContract.on("NFTMinted", (owner, tokenId, event) => {
  let newMintedNFTData = {
    Owner: owner,
    TokenId: tokenId,
    Data: event,
  };
  console.log(JSON.stringify(newMintedNFTData));
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

//Listener to listen to when a vote is cast
async function votes() {
  const websocketProvider = new ethers.providers.WebSocketProvider(
    process.env.ALCHEMY_WS_API_KEY
  );
  const listenVotingcontract = new ethers.Contract(
    votingAddress,
    mumbaiVotingABI,
    websocketProvider
  );

  listenVotingcontract.on(
    "VoteCast",
    (address, proposalIndex, inSupport, event) => {
      let voteData = {
        VoterAddress: address,
        ProposalIndex: proposalIndex,
        InSupport: inSupport,
        data: event,
      };

      console.log(JSON.stringify(voteData));
    }
  );
}
votes();

// Endpoint to receive and save proposals
app.post("/saveProposal", async (req, res) => {
  try {
    const {
      project_title,
      project_id,
      project_description,
      project_Info,
      constr_company,
      project_status,
      project_benefit,
      project_cost,
      project_env_impact,
      project_progress,
      project_support,
      project_rejection,
      project_location,
      project_image,
    } = req.body;

    const newProposal = new Proposal({
      project_title,
      project_id,
      project_description,
      project_Info,
      constr_company,
      project_status,
      project_benefit,
      project_cost,
      project_env_impact,
      project_progress,
      project_support,
      project_rejection,
      project_location,
      project_image,
    });

    const savedProposal = await newProposal.save();

    res.status(201).json(savedProposal);
  } catch (error) {
    console.error("Error saving proposal:", error);
    res.status(500).json({ error: "Failed to save proposal" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
