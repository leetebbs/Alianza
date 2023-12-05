import React, { useEffect, useState } from "react";
import { useContractRead, useAccount } from "wagmi";
import { mumbaiNFTRegistrationABI } from "../../Utils/Abis";
import { registrationNFTAddress } from "../../Utils/ContractsAddresses";
import { MumbaiMintNFT } from "../../Utils/ContractHelpers/MumbaiMint";
import { FujiMintNFT } from "../../Utils/ContractHelpers/FujiMint";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Test.css";

const Test = () => {
  const [isHolder, setIsHolder] = useState(false);
  const [chain, setChain] = useState("");
  const account = useAccount();
  const address = account?.address;
  //chainIds
  const mumbaiChainId = "0x13881";
  const fujiChainId = "0xa869";
  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://polygon-mumbai.g.alchemy.com/nft/v2/9uK8JeF4i1SOC4XfmM4mlMtF0vPfeKq_/isHolderOfCollection?wallet=${address}&contractAddress=${registrationNFTAddress}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.isHolderOfCollection);
        setIsHolder(data.isHolderOfCollection);
      })
      .catch((err) => console.error(err));
  }, [address]);

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
  }, [chain, isHolder]);

  return (
    <div className="test-container">
      {!account.address ? (
        <div className="connect">
          <h1>Please connect your wallet</h1>
          <div className="connect-btn">
            <ConnectButton />
          </div>
        </div>
      ) : (
        <>
          {isHolder ? (
            <div>
              <h1>Address has already minted the NFT</h1>
            </div>
          ) : (
            <>
              <h1>Minting Page</h1>
              {chain === mumbaiChainId && <MumbaiMintNFT />}
              {chain === fujiChainId && <FujiMintNFT />}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Test;
