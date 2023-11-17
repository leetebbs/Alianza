// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AllianzReg is ERC721, Ownable {
    // Struct to store additional information for each NFT
    struct NFTInfo {
        string username;
        string geoAddress;
        uint256 age;
    }

    // Mapping from token ID to NFT information
    mapping(uint256 => NFTInfo) private nftInfo;

    // Mapping to track whether an address has already minted an NFT
    mapping(address => bool) private hasMintedNFT;

    // Counter for generating unique token IDs
    uint256 private tokenIdCounter;
    string baseURI;

    // Event emitted when a new NFT is minted
    event NFTMinted(address indexed owner, uint256 tokenId);

    // Constructor
    constructor() ERC721("AllianzRegistration", "ALZR") Ownable(msg.sender) {
        setBaseURI(
            "https://bafkreibceeihjkau3ogqcnumprudzxemupvxn2efdapw5np7poxb2i5nky.ipfs.nftstorage.link/?filename=reg.json"
        );
    }

    // Function to mint a new NFT with additional information
    function mintNFT(
        string memory _username,
        string memory _geoAddress,
        uint256 _age
    ) external {
        require(!hasMintedNFT[msg.sender], "Address has already minted an NFT");

        uint256 tokenId = tokenIdCounter;

        // Mint the NFT and assign it to the owner
        _safeMint(msg.sender, tokenId);

        // Store additional information in the mapping
        nftInfo[tokenId] = NFTInfo({
            username: _username,
            geoAddress: _geoAddress,
            age: _age
        });

        // Mark the address as having minted an NFT
        hasMintedNFT[msg.sender] = true;

        // Increment the token ID counter
        tokenIdCounter = tokenIdCounter + 1;

        // Emit an event
        emit NFTMinted(msg.sender, tokenId);
    }

    // Function to get the information of a specific NFT
    function getNFTInfo(
        uint256 _tokenId
    )
        external
        view
        returns (string memory username, string memory geoAddress, uint256 age)
    {
        NFTInfo memory info = nftInfo[_tokenId];
        return (info.username, info.geoAddress, info.age);
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
