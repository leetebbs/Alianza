import React from 'react';
import './howitwork.css'
import Feature from '../../components/feature/Feature';

const HowItWork = () => {

  const futuresData = [
    {
      title:'Step 1',
      text:'Purchase Tokens: Securely purchase tokens using our smart contracts on Polygon.'
    },
    {
      title:'Step 2',
      text:'Finance Public Works: Choose the public works you want to finance with your tokens.'
    },
    {
      title:'Step 3',
      text:'Track Progress: Follow the progress of public works in real time.'
    },
    {
      title:'Step 4',
      text:'Earn Rewards: Get rewards based on your contribution and the progress of the public works.'
    },
  ]
  return (
    <div className='webapp__features section__padding' id='features'>
      <div className='webapp__features-heading'>
        <h1 className='gradient__text'>How it Works?</h1>
        <p>From token purchase to rewards, here's how our platform works.</p>
      </div>
      <div className='webapp__features-container'>
        {futuresData.map((item,index) => 
          <Feature 
          key={index}
          title={item.title}
          text={item.text}  
          /> 
        )}
      </div>
    </div>
  )
}

export default HowItWork