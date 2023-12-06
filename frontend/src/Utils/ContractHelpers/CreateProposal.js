import { votingAddress } from "../../Utils/ContractsAddresses";
import { mumbaiVotingABI } from "../../Utils/Abis";
import {
  useWaitForTransaction,
  useContractWrite,
  useAccount,
  usePrepareContractWrite,
} from "wagmi";

export function CreateAProposal({ title, description, duration }) {
  const account = useAccount();

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: votingAddress,
    abi: mumbaiVotingABI,
    functionName: "createAProposal",
    args: [title, description, duration],
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Creating..." : "create A Proposal"}
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
    </div>
  );
}
