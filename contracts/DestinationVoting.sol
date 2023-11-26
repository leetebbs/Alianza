// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {AlianzaVoting} from "./AlianzaVoting.sol";

contract DestinationVoter is CCIPReceiver {
    AlianzaVoting vote;

    event VoteCallSuccessfull();
    event ReceivedMessageData(bytes messageData);

    constructor(address router, address votingAddress) CCIPReceiver(router) {
        require(router != address(0), "Invalid router address");
        require(votingAddress != address(0), "Invalid voting contract address");

        vote = AlianzaVoting(votingAddress);
    }

    //function to update voting contract address
    function uodateVotingAddress(address _newAddress) public {
        vote = AlianzaVoting(_newAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        emit ReceivedMessageData(message.data);

        // (bool success, ) = address(nft).call(message.data);
        (bool success, ) = address(vote).call{gas: 2000000000000}(message.data);

        require(success, "Voting call failed");
        emit VoteCallSuccessfull();
    }
}
