// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenSale is Ownable {
    ERC20 public token; // The token being sold
    AggregatorV3Interface public priceFeed; // Chainlink Price Feed for ETH/USD

    uint256 public tokenPrice; // Token price in USD (cents)
    uint256 public tokensSold; // Number of tokens sold

    event TokenPurchased(
        address indexed buyer,
        uint256 amount,
        uint256 totalPrice
    );

    constructor(
        address _tokenAddress,
        address _priceFeedAddress,
        address _initialOwner
    ) Ownable(_initialOwner) {
        token = ERC20(_tokenAddress);
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
        tokenPrice = 100; // Initial token price in USD (cents)
    }

    function setTokenPrice(uint256 _newPrice) external onlyOwner {
        tokenPrice = _newPrice;
    }

    function buyTokens(uint256 _tokenAmount) external payable {
        uint256 totalPrice = _calculateTotalPrice(_tokenAmount);
        require(msg.value == totalPrice, "Incorrect payment amount");

        // Transfer tokens to the buyer
        token.transfer(msg.sender, _tokenAmount);

        // Update tokens sold and emit event
        tokensSold += _tokenAmount;
        emit TokenPurchased(msg.sender, _tokenAmount, totalPrice);
    }

    function _calculateTotalPrice(
        uint256 _tokenAmount
    ) internal view returns (uint256) {
        uint256 ethPriceInCents = _getEthPriceInCents();
        return (_tokenAmount * tokenPrice * 1e18) / ethPriceInCents;
    }

    function _getEthPriceInCents() internal view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        require(price > 0, "Invalid price feed");
        return uint256(price);
    }

    // Withdraw funds from the contract
    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Withdraw unsold tokens from the contract
    function withdrawUnsoldTokens() external onlyOwner {
        uint256 unsoldTokens = token.balanceOf(address(this));
        require(unsoldTokens > 0, "No unsold tokens");
        token.transfer(owner(), unsoldTokens);
    }
}
