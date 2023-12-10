import React, { useEffect, useState } from "react";
import "./VoteProject.css";
import Intro from "../../components/intro/Intro";
import { Cta } from "../../components";
import BtnLink from "../../components/BtnLink/BtnLink";
// New
import ProjectSection from "../../containers/ProjectSection/ProjectSection";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// Fake DB
import fakePublicWorksData from "../../data/fakeDataOnPW";
import axios from "axios";
// console.log(fakePublicWorksData);
const VoteProject = () => {
  const [proposalData, setProposalData] = useState([]);
  const serverURL = "https://alianza-hazel.vercel.app";
  // const fetchData = async () => {
  //   const propData = await axios.get(`${serverURL}/getProposals`);
  //   console.log("Publicworks proposalData: ", propData.data);
  //   setProposalData(propData.data);
  //   console.log("statedata: ", proposalData);
  // };

  // fetchData();

  useEffect(() => {
    const fetchData = async () => {
      const propData = await axios.get(`${serverURL}/getProposals`);
      console.log("Publicworks proposalData: ", propData.data);
      setProposalData(propData.data);
      console.log("statedata: ", proposalData);
    };
    fetchData();
  }, []);

  // INTRO Content
  const introInfo = {
    title: `Public Works Financed Through Blockchain`,
    text: `Explore the various municipal public works financed through
    our plataform. Get real-time updates on their progress and see your 
    contribution at work.`,
  };

  // CTA Content
  const ctaInfo = {
    title: `Make a Difference!`,
    text: `Join us in transforming our city. Get to decide, track progress,
     and be an active participant on your community. Your participation
    makes a difference.`,
    btnText: `Connect`,
    btnLink: `https://allianz-teal.vercel.app/public-works`,
  };

  //  Public Work Listing Content
  const publicWorkListing = {
    title: "On going Projects",
    text: `These are the projects currently being voted 
    through our platform.`,
    btnLink: "https://allianz-teal.vercel.app/public-works",
    btnText: "Vote",
  };

  return (
    <>
      <Intro title={introInfo.title} text={introInfo.text} />
      {/* Public Work Listing */}
      <section className="page__hiw">
        {/* Project On to Vote Listing */}
        <div className="section__padding">
          <ProjectSection
            title={`Projects to Vote`}
            text={"Select a project !"}
            //  fakePublicWorksData Need to be replace by the DATA from the DATABASE of Projects
            gridDetails={fakePublicWorksData.map((work) => (
              <ProjectCard key={work.id} work={work} />
            ))}
            btnLink={
              <ConnectButton label="Connect to Vote" accountStatus={"avatar"} />
            }
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
  );
};

export default VoteProject;
