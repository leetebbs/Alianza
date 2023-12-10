// ProjectDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import fakePublicWorksData from "../../data/fakeDataOnPW";
import "./ProjectDetail.css"; // Import your CSS file
import { useContractRead, useAccount } from "wagmi";
import { VotingMumbai } from "../../Utils/ContractHelpers/VotingMumbai";
import { VotingMumbaiAgainst } from "../../Utils/ContractHelpers/VotingMumbaiAgainst";
import { VotingFuji } from "../../Utils/ContractHelpers/VotingFuji";
import { VotingFujiAgainst } from "../../Utils/ContractHelpers/VotingFujiAgainst";

const ProjectDetail = () => {
  const [chain, setChain] = useState("");
  const account = useAccount();
  const address = account?.address;
  const location = useLocation();

  // Extract data from the location state
  const { id, image, alt_image, title, description, progress, benefit } =
    location.state || {};

  //check if user account has already voted and has an nft to vote
  //chainIds
  const mumbaiChainId = "0x13881";
  const fujiChainId = "0xa869";

  window.ethereum.on("chainChanged", handleChainChanged);

  function handleChainChanged() {
    window.location.reload();
  }

  useEffect(() => {
    async function checkChain() {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        setChain(chainId);
      }
    }
    checkChain();
  }, [chain]);

  const { projectId } = useParams();
  // const projectId = 9;

  // Replace this function with your actual function to fetch project details
  const getProjectDetails = (projectId) => {
    // Fetch project details based on projectId from your data source (e.g., API call, database query)
    // Return the project details object
    // For demonstration purposes, return a mock project details object
    return {
      id: projectId,
      title: `Project ${projectId}`,
      description: `Description for Project ${projectId}`,
      progress: Math.floor(Math.random() * 100), // Random progress for demonstration
      tokens: Math.floor(Math.random() * 200), // Random tokens for demonstration
      image: `./projectImages/project${projectId}.png`, // Replace with the actual image path
      alt_image: `Project ${projectId} Image`,
      // Add more details as needed
    };
  };

  // Fetch project details based on projectId from your data source
  const projectDetails = getProjectDetails(projectId);

  // const projectDetails = fakePublicWorksData;

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  console.log("Project Details:", {
    id,
    image,
    alt_image,
    title,
    description,
    progress,
    benefit,
  });

  return (
    <div className="project-detail-container">
      <img src={image} alt={alt_image} />
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Progress: {progress}%</p>
      <p>Benefit: {benefit}</p>
      <div>
        {chain === mumbaiChainId && (
          <div className="voting-btns">
            <VotingMumbai proposalId={id} />
            <VotingMumbaiAgainst proposalId={id} />
          </div>
        )}
        {chain === fujiChainId && (
          <div className="voting-btns">
            <VotingFuji proposalId={id} />
            <VotingFujiAgainst proposalId={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
