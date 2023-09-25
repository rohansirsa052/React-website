import React from 'react';
import HomeSection from './componants/HomeSection';
import styled from "styled-components";
import Contact from './Contact';
import Services from './Services';
import FrontPageIntro from './componants/FrontPageIntro';
import FrontPageServices from './componants/FrontPageServices';
import FrontPageTestimonial from './componants/FrontPageTestimonial';
import Insights from './componants/Insights';
// import Header from './componants/Header'

const Home = () => {

  
  const Data= {
    topData: "who we are",
    mainHeading : "FINTECH",
    para: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis. Totam asperiores odio atque ex, autem omnis. Veritatis, odio eum.",
    Button: "Schedule a call"
  }
  return (
    <React.Fragment>
      <HomeSectionWrapper>
        <HomeSection  {...Data}/>
      </HomeSectionWrapper>
      <FrontPageIntro/>
      
      <Services />
      <FrontPageServices/>
        <Contact />
        <FrontPageTestimonial/>
         <Insights/>
    </React.Fragment>
  );
};


const HomeSectionWrapper = styled.section`
  &::before {
    content: "";
    background: url("https://wallpapercave.com/dwp2x/wp2446267.jpg") no-repeat center center/cover;
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 0.9;
  }
`;

export default Home;