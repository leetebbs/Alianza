// ProjectDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      // console.log(chainId);
      setChain(chainId);
    }
    checkChain();
    // console.log(isHolder);
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
  //   const projectDetails = getProjectDetails(projectId);

  const projectDetails = fakePublicWorksData;

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  const { title, description, progress, tokens, image, alt_image } =
    projectDetails;
  console.log(projectDetails);
  return (
    <div className="project-detail-container">
      <img src={image} alt={alt_image} />
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Progress: {progress}%</p>
      <p>Tokens for Financing: {tokens}</p>
      <img src={image} alt={alt_image} />
      {/* Add more details as needed */}
      <div>
        {chain === mumbaiChainId && (
          <div className="voting-btns">
            <VotingMumbai proposalId={projectId} />
            <VotingMumbaiAgainst proposalId={projectId} />
          </div>
        )}
        {chain === fujiChainId && (
          <div className="voting-btns">
            <VotingFuji proposalId={projectId} />
            <VotingFujiAgainst proposalId={projectId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
