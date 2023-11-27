import React from 'react'
import './PublicWork.css'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'

const PublicWork = () => {
  
  // INTRO Content
  const introInfo = {
    title: `Public Works Financed Through Blockchain`,
    text : `Explore the various municipal public works financed through
    our plataform. Get real-time updates on their progress and see your 
    contribution at work.`,
}

// CTA Content
const ctaInfo = {
    title:`Ready to Make a Difference?`,
    text:`Join us in transforming our city. Purchase tokens, 
    finance public works, track progress, and earn rewards. Your participation
    makes a difference.`,
    btnText:`Sign Up Now`,
    btnLink: `https://allianz-teal.vercel.app/public-works`
}

    return (
        <>
        <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />

        <Cta
            cta_title={ctaInfo.title}
            cta_text={ctaInfo.text}
            cta_btn_link={ctaInfo.btnLink}
            cta_btn_text={ctaInfo.btnText}
        
        />
    </>
  )
}

export default PublicWork