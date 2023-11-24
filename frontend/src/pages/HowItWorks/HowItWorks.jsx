import React from 'react'
import Intro from '../../components/intro/Intro'
import Steps from '../../containers/Steps/Steps'
// JSON file to manage info 
import howItWorksData from '../../data/howItWorksData.json'
import BtnLink from '../../components/BtnLink/BtnLink'
import { Cta } from '../../components'
const HowItWorks = () => {
  return (
    <>
      <section>
        <Intro
          title = {`Understanding the Power of Blockchain in Public Works Financing`}
          text = {`Our platform leverages the power of Polygon and Chainlink to bring transparency and citizen
          participation to the financing of municipal public works. Let's explore how it all works.`}
        />
      </section>
      {howItWorksData.map((step, index) => (
      <Steps
        key={index}
        title={step.title}
        text={step.text}
        media={step.media}
        alt_media={step.alt_media}
        // This prop is to render any button component
        btnLink = {<BtnLink
          btn_text={step.btn_text}
          btn_link={step.btn_link}
                  />}
        
      />
    ))}
      <Cta
        cta_title={`Ready to Make a Diffence?`}
        cta_text={`Join us in transforming our city. Purchase tokens, finance
        public works, track progress, and earn rewards. Your participation makes a difference.`}
        cta_btn_text={`Sign Up Now!`}
        cta_btn_link={`https://allianz-teal.vercel.app/`} 
      />
    </>
  )
}

export default HowItWorks