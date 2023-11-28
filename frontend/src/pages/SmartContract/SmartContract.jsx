import React from 'react'
import './SmartContract.css'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'
import Steps from '../../containers/Steps/Steps'

const SmartContract = () => {

   // INTRO Content
  const introInfo = {
    title: `Smart Contracts: The Backbone of Our Platform`,
    text : `"Smart contracts are self-executing agreements stored on the blockchain. They automate
    the process of purchasing tokens and financing public works.`,
  }

  // CTA Content
  const ctaInfo = {
    title:``,
    text:``,
    btnText:``,
    btnLink: `https://allianz-teal.vercel.app/public-works`
  }

    // SECTION DATA
    // Creation and Management
    const creationManagement = {
        title: `Creation and Management of Smart Contracts`,
        text: `Smart contracts are created and managed for each public work, programmed to
        automatically execute via Chainlink when certain conditions are met.`,
        media: ``,
        alt_media: `MEDIA`,
        btnLink: ``,
        btnText: `Learn More About Smart Contracts`
    }

   return (
    <>
    <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />
        {/* Creation and Management */}
        <section className='page__hiw'>
            <Steps 
                title={creationManagement.title}
                text={creationManagement.text}
                media={creationManagement.media}
                alt_media={creationManagement.alt_media}
                btnLink={
                    <btnLink 
                        btnLink={creationManagement.btnLink}
                        btnText={creationManagement.btnText}
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

export default SmartContract