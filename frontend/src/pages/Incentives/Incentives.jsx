import React from 'react'
import './Incentives.css'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'
import Steps from '../../containers/Steps/Steps'
import logoAlianza02 from '../../assets/logoAlianza02.png'
const Incentives = () => {

    // INTRO Content
  const introInfo = {
    title: `Incentives: Rewarding Participation in Public Works Financing`,
    text : `We believe in rewarding citizens who participate in the financing of public works. Here's
    how our incentive system works.`,
  }

  // CTA Content
  const ctaInfo = {
    title:``,
    text:``,
    btnText:``,
    btnLink: `https://allianz-teal.vercel.app/public-works`
  }

    // SECTION DATA
    // Rewards Distribution
    const incentivesContent  = {
        title: `How Rewards are Distributed`,
        text: `Chainlink supplies real-time data from external sources such as tax or utility records. This
        allows smart contracts to be programmed to automatically distribute rewards to citizens who own
        tokens.`,
        media: logoAlianza02,
        alt_media: `logoAlianza02`,
        btnLink: `https://allianz-teal.vercel.app/public-works`,
        btnText: `Sign Up to Earn Rewards`
   }

   return (
    <>
    <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />
        {/* Rewards Distribution */}
        <section className='page__hiw'>
            <Steps 
                title={incentivesContent.title}
                text={incentivesContent.text}
                media={incentivesContent.media}
                alt_media={incentivesContent.alt_media}
                btnLink={
                    <btnLink 
                        btnLink={incentivesContent.btnLink}
                        btnText={incentivesContent.btnText}
                    />
                }
            />
        </section>
        <Cta
            cta_title={ctaInfo.title}
            cta_text={ctaInfo.text}
            cta_btn_link={ctaInfo.btnLink}
            cta_btn_text={ctaInfo.btnText}
        
        />
    </>  
  )
}

export default Incentives