import React from "react";
import { votingAddress } from "../ContractsAddresses";
import { mumbaiVotingABI } from "../Abis";
import {
  useWaitForTransaction,
  useContractWrite,
  usePrepareContractWrite,
  useAccount,
} from "wagmi";

export function VotingMumbai({ proposalId }) {
  console.log("mubai component : ", proposalId);
  const account = useAccount();
  const address = account?.address;
  const { config, error: prepareError } = usePrepareContractWrite({
    address: votingAddress,
    abi: mumbaiVotingABI,
    functionName: "vote",
    args: [address, proposalId, true],
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleButtonClick = async () => {
    try {
      // Trigger the contract write operation
      await write();
    } catch (writeError) {
      console.error("Error during contract write:", writeError);
      // Notify the parent component about the error
      //   onError(writeError);
    }
  };

  // Notify the parent component about the success
  React.useEffect(() => {
    if (isSuccess) {
      //   onSuccess();
    }
  }, [isSuccess]);

  return (
    <div>
      <button disabled={!write || isLoading} onClick={handleButtonClick}>
        {isLoading ? "Voting..." : "Vote For"}
      </button>
      {isSuccess && (
        <div>
          Success!
          <div>
            <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>
              MumbaiScan
            </a>
          </div>
        </div>
      )}
      {isError && (
        <div>
          Error: {error.message}
          {/* Display more error details if needed */}
        </div>
      )}
    </div>
  );
}
