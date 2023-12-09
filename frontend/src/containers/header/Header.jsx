import React from "react";
import image from "../../constants/images";
import "./header.css";

const Header = () => {
  return (
    <div className="webapp__header section padding" id="home">
      <div className="webapp__header-container">
        <h1 className="gradient__text">
          AlianzA: Your Alliance changes your city.
        </h1>
        <p>
          Would you like to influence decisions about public works and services
          that impact your city? Would you like to access clear information
          about projects in your community? Do you want to be part of a network
          committed to sustainable development? If so, Alianza is your ideal
          project. It allows you to actively participate in the identification
          of priority works using Polygon blockchain technology, Chainlink CCIP
          and MongoDB. Connect, mint your NFT Alliance to vote, explore
          proposals, access transparent data, vote for projects of interest and
          share opinions. Alliance, with innovation and transparency, unites
          citizen participation and blockchain technology. It offers a unique
          opportunity to influence decisions about public works and services,
          impacting your quality of life and the development of the community.
          Don't wait any longer, join Alianza and participate in the revolution
          of citizenship in public works. Your voice is crucial!
        </p>
        <div className="webapp__header-container__btn">
          <button type="button">Learn More</button>
        </div>
      </div>
      <div className="webapp__header-image">
        <img src={image.transparency} alt="main img" />
      </div>
      {/*<div className='webapp__header-image'>
   <img src={image.logoAlianza02}  alt='main img'/>
   <img src={image.citizien1}  alt='main img'/>
   <img src={image.citizien2}  alt='main img'/>
   <img src={image.transparency}  alt='main img'/>*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;
