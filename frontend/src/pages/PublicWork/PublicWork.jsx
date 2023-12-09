import React from 'react'
import './PublicWork.css'
import Intro from '../../components/intro/Intro'
import { Cta } from '../../components'
import BtnLink from '../../components/BtnLink/BtnLink'
// New
import ProjectSection from '../../containers/ProjectSection/ProjectSection'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { ConnectButton } from "@rainbow-me/rainbowkit";
// Fake DB
import fakePublicWorksData from '../../data/fakeDataOnPW'
console.log(fakePublicWorksData);
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

  //  Public Work Listing Content
  const publicWorkListing = {
    title:'On going Projects',
    text: `These are the projects currently being voted 
    through our platform.`,
    btnLink: 'https://allianz-teal.vercel.app/public-works',
    btnText: 'Vote'
  }

  // Completed Public Work Content      
  const completedPublicWork = {
    title:'Completed Projects',
    text: `Take a look at the projects that have been succesfully
    financed and completed through our platform.`,
    btnLink: 'https://allianz-teal.vercel.app/public-works',
    btnText: 'View Completed Projects'
  }
    return (
        <>
        <Intro 
            title={introInfo.title}
            text={introInfo.text}
        />
        {/* Public Work Listing */}
        <section className='page__hiw'>
          {/* Project On to Vote Listing */}
        <div className='section__padding'>
        <ProjectSection
          title={`Projects to Vote`}
          text={'Select a project !'}
        //  fakePublicWorksData Need to be replace by the DATA from the DATABASE of Projects
          gridDetails={fakePublicWorksData.map((work) => (
        <ProjectCard key={work.id} work={work} />
          ))}
          btnLink={<ConnectButton label="Connect to Vote" accountStatus={"avatar"} />}
        />
          
        </div>
       </section>
        
        {/* Completed Public Work */}
        <section className='page__hiw'>
        <div className='section__padding'>
        <ProjectSection
          title={`Projects Completed`}
          text={'Look to pass project !'}
        //  fakePublicWorksData Need to be replace by the DATA from the DATABASE of Projects
          gridDetails={fakePublicWorksData.map((work) => (
        <ProjectCard key={work.id} work={work} />
          ))}
          // btnLink={<ConnectButton label="Connect to Vote" accountStatus={"avatar"} />}
        />
          
        </div>
        
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

export default PublicWork