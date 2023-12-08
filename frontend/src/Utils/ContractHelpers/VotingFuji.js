import React from "react";
import { avaxFujiVotingAddress } from "../ContractsAddresses";
import { avaxFujiVotingABI } from "../Abis";
import {
  useWaitForTransaction,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export function VotingMumbai({ proposalId, support }) {
  const { config, error: prepareError } = usePrepareContractWrite({
    address: avaxFujiVotingAddress,
    abi: avaxFujiVotingABI,
    functionName: "vote",
    args: [proposalId, support, 0],
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
        {isLoading ? "Voting..." : "Vote"}
      </button>
      {isSuccess && (
        <div>
          Success!
          <div>
            <a href={`https://testnet.snowtrace.io/tx/${data?.hash}`}>
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
