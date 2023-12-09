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
            text=" Alianza is a project based on the Polygon, Chainlink, and MongoDB network that allows you to actively participate in the identification and deliberation of the public works and infrastructure services that you consider to be the most priority, beneficial, and sustainable."
                 
          />
          <Feature
            title="Mission"
            text="Alianza offers you a unique opportunity to participate in decision-making about public works and infrastructure services, which directly affect your quality of life and the development of your community"
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