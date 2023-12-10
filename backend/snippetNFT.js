const Web3 = require('web3');
const { mumbaiNFTRegistrationABI, avaxFujiNFTRegistrationABI } = require('./path/to/ABIs');

const web3 = new Web3('https://rpc.mumbai.fantom.network'); // or 'https://api.avax-test.network/ext/bc/C/rpc' for Avalanche Fuji network
const nftRegistrationContract = new web3.eth.Contract(mumbaiNFTRegistrationABI, '0x8428e4ec0FD3E96f56c98229132dac9b62d325df'); // replace with the contract address
const owner = '0xBEb2f649a3A14866D06D41Baaba7Db25b7638B0E'; // replace with the owner address
const tokenId = 1; // replace with the ID of the NFT

nftRegistrationContract.methods.balanceOf(owner, tokenId).call((err, balance) => {
  if (err) {
    console.error(err);
  } else {
    if (balance > 0) {
      console.log('NFT has been minted correctly');
    } else {
      console.log('NFT has not been minted correctly');
    }
  }
});
