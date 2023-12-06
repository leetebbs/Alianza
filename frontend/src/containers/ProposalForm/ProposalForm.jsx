import React from "react";
import "./ProposalForm.css";
import { useState } from "react";
import axios from "axios";
import { votingAddress } from "../../Utils/ContractsAddresses";

// check to see if the wallet is an admin address and only render form if is admin
// fetch the number of propoals so can use as project id for new proposal in db +1
//create a new proposal in the smart contract and await the tx hash then add this to the json and send to the server

// const serverURL = "http://localhost:5000";
const serverURL = "https://alianza-hazel.vercel.app";
const ProposalForm = () => {
  const [formData, setFormData] = useState({
    project_title: "",
    project_id: "",
    project_description: "",
    project_Info: "",
    constr_company: "",
    project_status: "",
    project_benefit: "",
    project_cost: "",
    project_env_impact: "",
    project_progress: "",
    project_support: "",
    project_rejection: "",
    project_location: "",
    project_image: "",
    project_voting_duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      // Send the form data as JSON
      const response = axios.post(`${serverURL}/createProposal`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle the response data (if needed)
      console.log("Response from server:", response.data);

      // Reset the form data if the request is successful
      setFormData({
        project_title: "",
        project_id: "",
        project_description: "",
        project_Info: "",
        constr_company: "",
        project_status: "",
        project_benefit: "",
        project_cost: "",
        project_env_impact: "",
        project_progress: "",
        project_support: "",
        project_rejection: "",
        project_location: "",
        project_image: "",
        project_voting_duration: "",
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating proposal:", error);
      // You might want to show an error message to the user
    }
  };

  return (
    <div className="webapp__proposalForm section__margin">
      <h1 className="webapp__proposalForm-title">Create a Proposal</h1>
      <form className="webapp__proposalForm-form" onSubmit={handleSubmit}>
        <div className="webapp__proposalForm-form_input">
          {/* Project Title */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_title">
              Project Title:
            </label>
            <input
              type="text"
              id="project_title"
              name="project_title"
              value={formData.project_title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project ID */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_id">
              Project ID:
            </label>
            <input
              type="number"
              id="project_id"
              name="project_id"
              value={formData.project_id}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Description */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_description">
              Project Description:
            </label>
            <textarea
              id="project_description"
              name="project_description"
              value={formData.project_description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Info */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_Info">
              Project Info:
            </label>
            <input
              type="text"
              id="project_Info"
              name="project_Info"
              value={formData.project_Info}
              onChange={handleChange}
              required
            />
          </div>

          {/* Construction Company */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="constr_company">
              Construction Company:
            </label>
            <input
              type="text"
              id="constr_company"
              name="constr_company"
              value={formData.constr_company}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Status */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_status">
              Project Status:
            </label>
            <input
              type="text"
              id="project_status"
              name="project_status"
              value={formData.project_status}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Benefit */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_benefit">
              Project Benefit:
            </label>
            <input
              type="text"
              id="project_benefit"
              name="project_benefit"
              value={formData.project_benefit}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Cost */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_cost">
              Project Cost:
            </label>
            <input
              type="number"
              id="project_cost"
              name="project_cost"
              value={formData.project_cost}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Environmental Impact */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_env_impact">
              Project Environmental Impact:
            </label>
            <input
              type="text"
              id="project_env_impact"
              name="project_env_impact"
              value={formData.project_env_impact}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Progress */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_progress">
              Project Progress:
            </label>
            <input
              type="number"
              id="project_progress"
              name="project_progress"
              value={formData.project_progress}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Support */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_support">
              Project Support:
            </label>
            <input
              type="number"
              id="project_support"
              name="project_support"
              value={formData.project_support}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Rejection */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_rejection">
              Project Rejection:
            </label>
            <input
              type="number"
              id="project_rejection"
              name="project_rejection"
              value={formData.project_rejection}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Location */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_location">
              Project Location:
            </label>
            <input
              type="text"
              id="project_location"
              name="project_location"
              value={formData.project_location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Image */}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_image">
              Project Image URL:
            </label>
            <input
              type="file"
              id="project_image"
              name="project_image"
              onChange={handleChange}
              required
            />
          </div>
          {/* Project Voting Duration*/}
          <div className="inputForm">
            <label className="inputForm_label" htmlFor="project_image">
              Project Voting Duration (in seconds):
            </label>
            <input
              type="number"
              id="project_voting_duration"
              name="project_voting_duration"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="webapp__proposalForm-btn">
            <button type="submit">Submit Proposal</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProposalForm;
