const mongoose = require("mongoose");

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

const proposalSchema = new mongoose.Schema({
  project_title: String,
  project_id: Number,
  project_description: String,
  project_Info: String,
  constr_company: String,
  project_status: String,
  project_benefit: String,
  project_cost: Number,
  project_env_impact: String,
  project_progress: Number,
  project_support: Number,
  project_rejection: Number,
  project_location: String,
  project_image: String,
});

module.exports = mongoose.model("Proposals", proposalSchema);
