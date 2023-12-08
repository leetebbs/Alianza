import React from 'react'
import './ProjectDetailPage'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'
import BtnLink from '../../components/BtnLink/BtnLink'
import fakePublicWorksData from '../../data/fakeDataOnPW'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ProjectDetail from '../../containers/ProjectDetatil/ProjectDetail'
console.log(fakePublicWorksData);
const ProjectDetailPage = () => {
  
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

  //  Public Work Listing Content
  const publicWorkListing = {
    title:'On going Public Works',
    text: `These are the public works currently being financed 
    through our platform.`,
    btnLink: 'https://allianz-teal.vercel.app/public-works',
    btnText: 'Finance a Public Work'
  }

  // Completed Public Work Content      
  const completedPublicWork = {
    title:'Completed Public Works',
    text: `Take a look at the public works that have been succesfully
    financed and completed through our platform.`,
    btnLink: 'https://allianz-teal.vercel.app/public-works',
    btnText: 'View Completed Works'
  }


    return (
        <>
        <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />
        <ProjectDetail />
        

        <Cta
            cta_title={ctaInfo.title}
            cta_text={ctaInfo.text}
            cta_btn_link={ctaInfo.btnLink}
            cta_btn_text={ctaInfo.btnText}
        
        />
    </>
  )
}

export default ProjectDetailPage