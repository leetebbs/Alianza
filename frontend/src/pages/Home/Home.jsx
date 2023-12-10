import React from "react";
import { Header, About, HowItWork } from "../../containers";
import { Cta } from "../../components";
//import { Parallax } from 'react-parallax';

const Home = () => {
 return (
//  <Parallax
//    bgImage={process.env.PUBLIC_URL + '/theCity.webp'}
//    bgImageAlt="the city"
//    strength={500}
//    bgImageStyle={{maxWidth: '200vh', maxheight: '50vh'}}
//  >
    <div style={{ height: '550vh' }}>
      <Header />
      <About />
      <HowItWork />
      <Cta
        cta_title={`Get Involved`}
        cta_text={`Join us in transforming our city. Explore the projects,Vote for them, Check the voting results. Your participation makes a difference.`}
        cta_btn_text={`Connect`}
        cta_btn_link={`https://allianz-teal.vercel.app/`}
      />
    </div>
//</Parallax>
 );
};

export default Home;