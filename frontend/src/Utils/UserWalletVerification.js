import { useAccountModal } from "@rainbow-me/rainbowkit";
import { registrationNFTAddress } from "./ContractsAddresses";
import { useState } from "react";

const useWalletVerification = () => {
  const { openAccountModal } = useAccountModal();
  const [isWalletRegistered, setIsWalletRegistered] = useState(false);

  const verifyWalletInDatabase = async (walletAddress) => {
    // if (walletAddress === "0xB18324EB69a839DD4f0748925bc021B2f8c0290e"){
    //   return true
    // }

    // const isWalletRegistered = true; // Replace with your logic

    // using alchemy to fetch if the wallet is registered

    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://polygon-mumbai.g.alchemy.com/nft/v2/9uK8JeF4i1SOC4XfmM4mlMtF0vPfeKq_/isHolderOfCollection?wallet=${walletAddress}&contractAddress=${registrationNFTAddress}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.isHolderOfCollection);
        setIsWalletRegistered(data.isHolderOfCollection);
      })
      .catch((err) => console.error(err));

    console.log("isWalletRegistered: ", isWalletRegistered);
    if (!isWalletRegistered) {
      // If the wallet is not registered, open the registration modal
      // openAccountModal();
    }
  };

  return {
    verifyWalletInDatabase,
  };
};

export default useWalletVerification;
