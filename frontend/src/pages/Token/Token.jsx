import React from 'react'
import './Token.css'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'
import Steps from '../../containers/Steps/Steps'

const Token = () => {
  
   // INTRO Content
  const introInfo = {
    title: `Tokens: The Key to Participating in Public Works Financing`,
    text : `Tokens are digital assets that you can purchase to finance municipal public works. Here's
    how you can buy and use them on our platform.`,
  }

  // CTA Content
  const ctaInfo = {
    title:`Using Your Tokens`,
    text:`Once you have tokens, you can choose the public works you want to finance. Your
    tokens are used to fund these projects, driving their progress.`,
    btnText:`View Public Works`,
    btnLink: `https://allianz-teal.vercel.app/public-works`
  }

    // SECTION DATA
    // Token Purchase
    const tokenPurchase = {
        title: `How to Purchase Tokens`,
        text: `Our smart contracts on Polygon use Chainlink to interact with payment service APIs,
        allowing you to purchase tokens securely and efficiently.`,
        media: ``,
        alt_media: `MEDIA`,
        btnLink: ``,
        btnText: `Purchase Tokens Now`
    }

    // Token Use
    const tokenUse = {
        title: `Using Your Tokens`,
        text: `Once you have tokens, you can choose the public works you want to finance. Your
        tokens are used to fund these projects, driving their progress.`,
        media: ``,
        alt_media: `Media`,
        btnLink: ``,
        btnText: `View Public Works`
    }

   return (
    <>
    <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />
        {/* Token Purchase */}
        <section className='page__hiw'>
            <Steps 
                title={tokenPurchase.title}
                text={tokenPurchase.text}
                media={tokenPurchase.media}
                alt_media={tokenPurchase.alt_media}
                btnLink={
                    <btnLink 
                        btnLink={tokenPurchase.btnLink}
                        btnText={tokenPurchase.btnText}
                    />
                }
            />
        </section>

        {/*Token Use  */}
                <section className='page__hiw'>
            <Steps 
                title={tokenUse.title}
                text={tokenUse.text}
                media={tokenUse.media}
                alt_media={tokenUse.alt_media}
                btnLink={
                    <btnLink 
                        btnLink={tokenUse.btnLink}
                        btnText={tokenUse.btnText}
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

export default Token