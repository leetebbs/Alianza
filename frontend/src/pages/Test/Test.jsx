import React, { useEffect, useState } from "react";
import { useContractRead, useAccount } from "wagmi";
import { mumbaiNFTRegistrationABI } from "../../Utils/Abis";
import { registrationNFTAddress } from "../../Utils/ContractsAddresses";
import { MumbaiMintNFT } from "../../Utils/ContractHelpers/MumbaiMint";
import { FujiMintNFT } from "../../Utils/ContractHelpers/FujiMint";
import "./Test.css";
const Test = () => {
  const [name, setName] = useState("");
  const [chain, setChain] = useState("");
  const account = useAccount();
  //chainIds
  const mumbaiChainId = "0x13881";
  const fujiChainId = "0xa869";

  const { data } = useContractRead({
    address: registrationNFTAddress,
    abi: mumbaiNFTRegistrationABI,
    functionName: "name",
  });

  window.ethereum.on("chainChanged", handleChainChanged);

  function handleChainChanged() {
    window.location.reload();
  }

  useEffect(() => {
    async function checkChain() {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      console.log(chainId);
      setChain(chainId);
    }
    checkChain();
    setName(data);
  }, []);

  return (
    <div className="test-container">
      <h1>Minting Page</h1>
      <h1>{name}</h1>

      {chain === mumbaiChainId && <MumbaiMintNFT />}
      {chain === fujiChainId && <FujiMintNFT />}
    </div>
  );
};

export default Test;
