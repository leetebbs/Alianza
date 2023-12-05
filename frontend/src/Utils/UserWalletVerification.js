import { useAccountModal } from "@rainbow-me/rainbowkit";
import { registrationNFTAddress } from "./ContractsAddresses";
import { useState } from "react";

const useWalletVerification = () => {
  const { openAccountModal } = useAccountModal();

  const VerifyWalletInDatabase = async (walletAddress) => {
    // Implement logic to verify wallet in the database

    //@cisco this doesnot fetch the data from the database as i like you cannot get access to the database
    //I have queried the nft reg data from the contract using alchemy sdk.
    const [isWalletRegistered, setIsWalletRegistered] = useState(false);
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

    if (!isWalletRegistered) {
      // If the wallet is not registered, open the registration modal
      openAccountModal();
    }
  };

  return {
    VerifyWalletInDatabase,
  };
};

export default useWalletVerification;
