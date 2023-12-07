// CreateAProposal.js

import React from "react";
import { votingAddress } from "../../Utils/ContractsAddresses";
import { mumbaiVotingABI } from "../../Utils/Abis";
import {
  useWaitForTransaction,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export function CreateAProposal({ title, description, duration }) {
  const { config, error: prepareError } = usePrepareContractWrite({
    address: votingAddress,
    abi: mumbaiVotingABI,
    functionName: "createAProposal",
    args: [title, description, duration],
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
        {isLoading ? "Creating..." : "Create A Proposal"}
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
