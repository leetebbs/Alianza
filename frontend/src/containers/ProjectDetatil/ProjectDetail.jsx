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
  const { id, image, alt_image, title, description, progress, benefit } = location.state || {};

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
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        setChain(chainId);
      }
    }
    checkChain();
  }, [chain]);

  if (!id) {
    // Data not available, handle accordingly
    return <div>Loading...</div>;
  }

  console.log("Project Details:", { id, image, alt_image, title, description, progress, benefit });

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
