import React from 'react';
import image from '../../constants/images';
import './Footer.css'
const Footer = () => {
  
  return (
    <div className='webapp__footer section__padding'>
      <div className='webapp__footer-links'>
        <div className='webapp__footer-links_logo'>
          <img src={image.logoAlianza} alt='logo'/>
        </div>
        <div className='webapp__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
        </div>
        <div className='webapp__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='webapp__footer-copyright'>
        <p>2023 . all rigths reserved</p>
      </div>
    </div>
  )
}

export default Footer