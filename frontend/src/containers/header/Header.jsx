import React from 'react';
import image from '../../constants/images'
import './header.css';

const Header = () => {
  return (
    <div className='webapp__header section padding' id='home'>
      <div className='webapp__header-container'>
        <h1 className='gradient__text'>AlianzA: Your Alliance changes your city.</h1>
        <p>Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber. Bullpen blue run rotation relief pitcher grass umpire. Forkball bullpen suicide squeeze club bush league field sport. Base cookie triple play blue hot dog relay rake starting pitcher inning.</p>
        <div className='webapp__header-container__btn'>
          <button type='button'>Learn More</button>
        </div>

      </div>
      <div className='webapp__header-image'>
        <img src={image.logoAlianza02} alt='main img'/>
      </div>
      
    </div>
  )
}

export default Header