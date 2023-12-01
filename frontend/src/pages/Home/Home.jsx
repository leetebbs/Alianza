import React from "react";
import { Header, About, HowItWork } from "../../containers";
import { Cta } from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <HowItWork />
      <Cta
        cta_title={`Get Involved`}
        cta_text={`Join us in transforming our city. Purchase tokens, finance public works, track progress,
          and earn rewards. Your participation makes a difference.`}
        cta_btn_text={`Sign Up Now`}
        cta_btn_link={`https://allianz-teal.vercel.app/`}
      />
    </>
  );
};

export default Home;
