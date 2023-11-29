// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./AlianzaReg.sol"; // Import the AllianzReg contract

contract AlianzaVoting {
    struct Proposal {
        string name; // name of the proposal
        string scope; // scope of the proposal
        uint256 forVotes; // number of accumulated positive votes
        uint256 againstVotes; // number of accumulated negative votes
        uint256 deadline; // deadline for the proposal in seconds since epoch
        bool hasAdminEnded; // flag to indicate whether the proposal has ended
    }

    struct Admin {
        bool isActive; // flag to indicate if the admin is active
    }

    address public mainAdmin; // contract main administrator address
    mapping(address => Admin) public admins;
    mapping(address => bool) public hasVoted; // to track whether an address has voted

    Proposal[] public proposals;
    uint256 public totalNumberOfProposalsCreated = 0; // total number of proposals created.

    AlianzaReg public allianzReg; // Reference to the AllianzReg contract

    // modifier to only allow admins to execute functions
    modifier onlyAdmin() {
        require(admins[msg.sender].isActive, "Only admins can execute this");
        _;
    }

    event VoteCast(
        address indexed voter,
        uint256 indexed proposalIndex,
        bool inSupport
    );
    event AdminCreated(address indexed newAdmin);
    event ProposalCreated(
        string name,
        string scope,
        uint256 deadline,
        uint256 proposalIndex
    );

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
        emit AdminCreated(_newAdmin);
    }

    // function to create a new voting proposal with a deadline
    function createAProposal(
        string memory _proposalName,
        string memory _proposalScope,
        uint256 _duration // duration of the proposal in seconds
    ) public onlyAdmin {
        uint256 deadline = block.timestamp + _duration;
        uint256 proposalIndex = proposals.length;

        proposals.push(
            Proposal({
                name: _proposalName,
                scope: _proposalScope,
                forVotes: 0,
                againstVotes: 0,
                deadline: deadline,
                hasAdminEnded: false
            })
        );

        // activeProposalIndices.push(proposalIndex);
        totalNumberOfProposalsCreated = totalNumberOfProposalsCreated + 1;
        emit ProposalCreated(
            _proposalName,
            _proposalScope,
            deadline,
            proposalIndex
        );
    }

    // function to vote on a proposal
    function vote(
        address _address,
        uint256 _proposalIndex,
        bool _inSupport
    ) public {
        require(!admins[_address].isActive, "Admins cannot vote");
        require(hasNFT(_address), "You do not have an NFT");
        require(!hasVoted[_address], "Address has already voted");
        require(_proposalIndex < proposals.length, "Invalid proposal index");
        require(
            block.timestamp <= proposals[_proposalIndex].deadline,
            "Voting deadline has passed"
        );

        // Mark the user as voted
        hasVoted[_address] = true;

        // Update the vote count for the chosen proposal
        if (_inSupport) {
            proposals[_proposalIndex].forVotes++;
        } else {
            proposals[_proposalIndex].againstVotes++;
        }

        emit VoteCast(_address, _proposalIndex, _inSupport);
    }

    // Function to end a proposal
    function endProposal(uint256 _proposalIndex) public onlyAdmin {
        require(_proposalIndex < proposals.length, "Invalid proposal index");
        require(
            !proposals[_proposalIndex].hasAdminEnded,
            "Proposal has already ended"
        );

        proposals[_proposalIndex].hasAdminEnded = true;
    }

    // Function to check if an address owns an NFT from AllianzReg contract
    function hasNFT(address _address) internal view returns (bool) {
        uint256 balance = allianzReg.balanceOf(_address);
        return balance > 0;
    }

    // function to check the status of a proposal
    function getProposalStatus(
        uint256 _proposalIndex
    ) public view returns (bool isActive, bool hasEnded) {
        require(_proposalIndex < proposals.length, "Invalid proposal index");

        // Check if the proposal has ended
        if (block.timestamp > proposals[_proposalIndex].deadline) {
            return (false, true); // Proposal has ended
        }

        // Determine if the proposal is active or has ended
        isActive =
            !proposals[_proposalIndex].hasAdminEnded &&
            block.timestamp <= proposals[_proposalIndex].deadline;
        hasEnded = proposals[_proposalIndex].hasAdminEnded;
    }
}
