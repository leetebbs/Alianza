// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AlianzaReg is ERC721, Ownable {
    // Mapping to track whether an address has already minted an NFT
    mapping(address => bool) private hasMintedNFT;

    // Counter for generating unique token IDs
    uint256 private tokenIdCounter;
    string baseURI;

    // Event emitted when a new NFT is minted
    event NFTMinted(address indexed owner, uint256 tokenId);

    // Constructor
    constructor() ERC721("AlianzaRegistration", "ALZR") Ownable(msg.sender) {
        setBaseURI(
            "https://bafkreibceeihjkau3ogqcnumprudzxemupvxn2efdapw5np7poxb2i5nky.ipfs.nftstorage.link/?filename=reg.json"
        );
    }

    // Function to mint a new NFT with additional information
    function mintNFT(address _to) external {
        require(!hasMintedNFT[_to], "Address has already minted an NFT");

        uint256 tokenId = tokenIdCounter;

        // Mint the NFT and assign it to the owner
        _safeMint(_to, tokenId);

        // Mark the address as having minted an NFT
        hasMintedNFT[_to] = true;

        // Increment the token ID counter
        tokenIdCounter = tokenIdCounter + 1;

        // Emit an event
        emit NFTMinted(_to, tokenId);
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        return baseURI;
    }
}
