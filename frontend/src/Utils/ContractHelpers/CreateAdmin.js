import React, { useState } from "react";
import { mumbaiVotingABI } from "../Abis";
import { votingAddress } from "../ContractsAddresses";
import {
  useWaitForTransaction,
  useContractWrite,
  useAccount,
  usePrepareContractWrite,
} from "wagmi";

export function CreateAdmin() {
  const account = useAccount();

  const [newAddress, setNewAddress] = useState("");

  const addressHandler = (e) => {
    setNewAddress(e.target.value);
  };

  const { config } = usePrepareContractWrite({
    address: votingAddress,
    abi: mumbaiVotingABI,
    functionName: "createNewAdmin",
    args: [newAddress],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div className="adminContainer">
      <div>
        <h1>Admin</h1>
        <p>Create a new admin account</p>
        <div className="inputfield">
          <label>New Admin Address</label>
          <input
            type="text"
            required
            maxLength="42"
            onChange={addressHandler}
            value={newAddress}
            className="input"
          />
        </div>
      </div>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Creating..." : "Create Admin"}
      </button>
      {isSuccess && (
        <div>
          Successfully created a new admin!
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
