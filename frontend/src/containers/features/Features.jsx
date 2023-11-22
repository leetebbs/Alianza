import React from 'react';
import './features.css'
import Feature from '../../components/feature/Feature';

const Features = () => {

  const futuresData = [
    {
      title:'Safety',
      text:'Lorem Ipsum, at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.'
    },
    {
      title:'Fun',
      text:'Lorem Ipsum, at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.'
    },
    {
      title:'Quality',
      text:'Lorem Ipsum, at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.'
    },
    {
      title:'Security',
      text:'Lorem Ipsum, at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.'
    },
  ]
  return (
    <div className='webapp__features section__padding' id='features'>
      <div className='webapp__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Need to REalize it. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
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

export default Features