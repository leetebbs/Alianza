import React from 'react';
import './howitwork.css'
import Feature from '../../components/feature/Feature';

const HowItWork = () => {

    const futuresData = [
        
    {
      title:"Step 1 - Connect your wallet and mint the Alianza NFT",
      text:'To participate in Alianza, you need to have a wallet compatible with the Polygon network or fuji, such as Metamask or Trust Wallet. From your wallet, you will be able to mint the Alianza NFT, which is a non-fungible token that represents your membership in the project and gives you the right to vote in the projects. The Alianza NFT has a unique and personalized design, and can be collected or exchanged with other users.'
    },
    {
      title:'Step 2 - Explore the projects proposed by the authorities or by other citizens',
      text:'In Alianza, you will be able to access relevant and transparent information about public works projects and infrastructure services proposed by authorities or other citizens. You will be able to see the name, description, budget, deadline, impact and status of each project, as well as comments and suggestions from other users. You can also propose your own projects, as long as they meet the project\'s eligibility and sustainability criteria.this requires the user to have a admin account'
    },
    {
      title:'Step 3 - Vote for the projects that interest you the most, and share your opinion and suggestions with other citizens',
      text:'With your Alliance NFT, you will be able to vote for the projects that interest you most, and express your support or rejection of the proposals. You can also share your opinion and suggestions with other users, and debate the pros and cons of each project. Your participation will be rewarded with Alliance tokens, which you can use to access exclusive services or benefits.'
    },
    {
      title:'Step 4 - Check the voting results and the status of the projects in progress',
      text:'The results of the voting will be published on the Alianza website, and will be reflected in the ranking of the most popular projects demanded by citizens. The projects that receive the most votes will be prioritized and executed by the authorities, as long as they have the necessary resources and permits. You will be able to consult the status of projects in execution, and verify that deadlines, budgets and planned objectives are met. You will also be able to report any incident or anomaly that you detect in the projects, and contribute to their improvement and supervision.'
    },
  ]
  return (
    <div className='webapp__features section__padding' id='features'>
      <div className='webapp__features-heading'>
        <h1 className='gradient__text'>How it Works?</h1>
        <p>Alianza is a project that allows you to actively participate in the identification and deliberation of the public works and infrastructure services that you consider to be the most priority, beneficial and sustainable. To do this, it uses the Polygon network&apos;s blockchain technology, Chainlink  Cross-Chain Interoperability Protocol(CCIP) and MongoDB as a database.These are the steps you must follow to join Alianza and make your voice heard:</p>
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