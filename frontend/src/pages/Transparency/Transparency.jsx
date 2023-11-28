import React from 'react'
import './Transparency.css'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'
import Steps from '../../containers/Steps/Steps'
import logoAlianza02 from '../../assets/logoAlianza02.png'
const Transparency = () => {
  
   // INTRO Content
  const introInfo = {
    title: `Transparency: Building Trust with Blockchain`,
    text : `Transparency is one of the key benefits of blockchain technology. Here's how we ensure
    transparency in every transaction on our platform.`,
  }

  // CTA Content
  const ctaInfo = {
    title:``,
    text:``,
    btnText:``,
    btnLink: `https://allianz-teal.vercel.app/public-works`
  }

    // SECTION DATA
    // Transparency and Traceability
    const transparencyContent  = {
        title: `Transparency and Traceability in Action`,
        text: `Smart contracts on Polygon are transparent and auditable, allowing anyone to verify
        transactions and contract status. Chainlink provides real-time data such as work progress reports,
        recorded on the blockchain for traceability.`,
        media: logoAlianza02,
        alt_media: `logoAlianza02`,
        btnLink: `https://allianz-teal.vercel.app/public-works`,
        btnText: `View Public Works`
    }
 
   return (
    <>
    <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />
        {/* Transparency and Traceability */}
        <section className='page__hiw'>
            <Steps 
                title={transparencyContent.title}
                text={transparencyContent.text}
                media={transparencyContent.media}
                alt_media={transparencyContent.alt_media}
                btnLink={
                    <btnLink 
                        btnLink={transparencyContent.btnLink}
                        btnText={transparencyContent.btnText}
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

export default Transparency