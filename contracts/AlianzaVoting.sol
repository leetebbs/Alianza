// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./AlianzaReg.sol"; // Import the AllianzReg contract

contract AlianzaVoting {
    struct Proposal {
        string name; // name of the proposal
        string scope; // scope of the proposal
        uint256 voteCount; // number of accumulated votes
    }

    struct Admin {
        bool isActive; // flag to indicate if the admin is active
    }

    address mainAdmin; // contract main administrator address
    mapping(address => Admin) public admins;
    mapping(address => bool) public hasVoted; // to track whether an address has voted

    Proposal[] public proposals;

    AlianzaReg public allianzReg; // Reference to the AllianzReg contract

    // modifier to only allow admins to execute functions
    modifier onlyAdmin() {
        require(admins[msg.sender].isActive, "Only admins can execute this");
        _;
    }

    // modifier to only allow non-admins to vote
    modifier onlyVoter() {
        require(!admins[msg.sender].isActive, "Admins cannot vote");
        require(hasNFT(msg.sender), "Address does not own an NFT");
        require(!hasVoted[msg.sender], "Address has already voted");
        _;
    }

    // initialise contract with main admin address and reference to AllianzReg contract
    constructor(address _mainAdmin, address _allianzRegAddress) {
        mainAdmin = _mainAdmin;
        admins[_mainAdmin].isActive = true; // set the main admin as active
        allianzReg = AlianzaReg(_allianzRegAddress); // Initialize reference to AllianzReg contract
    }

    // function to create new admins
    function createNewAdmin(address _newAdmin) public onlyAdmin {
        require(_newAdmin != address(0), "Invalid address");
        require(!admins[_newAdmin].isActive, "Admin already exists");

        admins[_newAdmin].isActive = true;
    }

    // function to create a new voting proposal
    function createAProposal(
        string memory _proposalName,
        string memory _proposalScope
    ) public onlyAdmin {
        proposals.push(
            Proposal({name: _proposalName, scope: _proposalScope, voteCount: 0})
        );
    }

    // function to vote on a proposal
    function vote(uint256 _proposalIndex) public onlyVoter {
        require(_proposalIndex < proposals.length, "Invalid proposal index");

        // Mark the user as voted
        hasVoted[msg.sender] = true;

        // Increment the vote count for the chosen proposal
        proposals[_proposalIndex].voteCount++;

        // You can emit an event here to log the vote
        // emit VoteCasted(msg.sender, _proposalIndex);
    }

    // Function to check if an address owns an NFT from AllianzReg contract
    function hasNFT(address _address) internal view returns (bool) {
        uint256 balance = allianzReg.balanceOf(_address);
        return balance > 0;
    }
}
