import React from 'react';
import './about.css';
import Feature from '../../components/feature/Feature';

const About = () => {
  return (
    <div className='webapp__whatwebapp section__margin' id='WhatWebapp'>
      <div className='webapp__whatwebapp-heading'>
          <h1 className='gradient__text'>About the Project</h1>
          
        </div>
        <div className='webapp__whatwebapp-container'>
          <Feature 
            title="Project" 
            text="The 'Polygon Blockchain Platform for Citizen Financing of Municipal Public Works' is an
            innovative concept that uses the Polygon network, compatible with Ethereum, and
            Chainlink technology."
          />
          <Feature
            title="Mission"
            text="Our objective is to increase citizen participation in the financing of public works and
            improve transparency in the use of public funds."
          />
          
        </div>
        {/* THis BTN comes from Hearder/container and the css is in header.css */}
        <div className='webapp__header-container__btn'>
          <button type='button'>Read more about the Project</button>
        </div>
    </div>
  )
}

export default About