import { avaxFujiNFTRegistrationABI } from "../Abis";
import { avaxFujiNFTMintingAddress } from "../ContractsAddresses";

import {
  useWaitForTransaction,
  useContractWrite,
  useAccount,
  usePrepareContractWrite,
} from "wagmi";

export function FujiMintNFT() {
  const account = useAccount();

  const { config } = usePrepareContractWrite({
    address: avaxFujiNFTMintingAddress,
    abi: avaxFujiNFTRegistrationABI,
    functionName: "mint",
    args: [0],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Minting..." : "Fuji Mint"}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://testnet.snowtrace.io/tx/${data?.hash}`}>
              Fuji Snowtrace
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
