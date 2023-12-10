// ProjectDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import fakePublicWorksData from "../../data/fakeDataOnPW";
import "./ProjectDetail.css"; // Import your CSS file
import { useContractRead, useAccount } from "wagmi";
import { votingAddress } from "../../Utils/ContractsAddresses";
import { mumbaiVotingABI } from "../../Utils/Abis";
import { VotingMumbai } from "../../Utils/ContractHelpers/VotingMumbai";
import { VotingMumbaiAgainst } from "../../Utils/ContractHelpers/VotingMumbaiAgainst";
import { VotingFuji } from "../../Utils/ContractHelpers/VotingFuji";
import { VotingFujiAgainst } from "../../Utils/ContractHelpers/VotingFujiAgainst";

const ProjectDetail = () => {
  const [chain, setChain] = useState("");
  const account = useAccount();
  const address = account?.address;
  const location = useLocation();

  let forVotes = 0;
  let againstVotes = 0;

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

  // fetch the votes for and against for the proposal with wagmi

  const Fetchvotes = async () => {
    try {
      const favorites = useContractRead({
        address: votingAddress,
        abi: mumbaiVotingABI,
        functionName: "proposals",
        args: [projectId],
      });

      console.log("favorites", favorites.data);
      let votesfor = favorites.data[2];
      forVotes = parseInt(votesfor);
      let votesagainst = favorites.data[3];
      againstVotes = parseInt(votesagainst);
      // };
    } catch (error) {
      console.log(error);
    }
  };
  Fetchvotes();
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
      <p>For Votes: {forVotes}</p>
      <p>Against Votes: {againstVotes}</p>
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
