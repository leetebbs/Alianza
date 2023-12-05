import { mumbaiNFTRegistrationABI } from "../Abis";
import { registrationNFTAddress } from "../ContractsAddresses";
import {
  useWaitForTransaction,
  useContractWrite,
  useAccount,
  usePrepareContractWrite,
} from "wagmi";

export function MumbaiMintNFT() {
  const account = useAccount();

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: registrationNFTAddress,
    abi: mumbaiNFTRegistrationABI,
    functionName: "mintNFT",
    args: [account.address],
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Minting..." : "Mumbai Mint"}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
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
