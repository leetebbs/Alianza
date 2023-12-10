const mongoose = require("mongoose");
const materialResourceSchema = new mongoose.Schema({
 name: String,
 quantity: Number,
 unitPrice: Number,
 totCost: String
});

const humanResourceSchema = new mongoose.Schema({
 rol: String,
 quantity: Number,
 salarioMensual: Number,
 durationMonths: Number
});

const workDataSchema = new mongoose.Schema({
 _id: String,
 Public_work_name: String,
 location: String,
 budget: String,
 schedule: String,
 construction_spec: String,
 quality: String,
 implem_pgm: String,
 materialResources: {
   item: [materialResourceSchema]
 },
 humanResources: {
   roles: [humanResourceSchema]
 },
 financial_resurce: String,
 work_in_progess: String,
 pending: String,
 completed: String,
 contract_aw: String,
 bidding_proc: String,
 contract_reg: String,
 app_progress: String,
 rules_regul: String,
 licens_status: String,
 licens_type: String,
 approval_status: String
});





module.exports = mongoose.model("WorkData", workDataSchema);