import React from 'react';
import HomeSection from './componants/HomeSection';
import styled from "styled-components";
import Contact from './Contact';
import Services from './Services';

const Home = () => {  
  return (
    <React.Fragment>
      <HomeSectionWrapper>
        <HomeSection />
      </HomeSectionWrapper>
      <Services />
     
        <Contact />
        
    </React.Fragment>
  );
};

const HomeSectionWrapper = styled.section`
  &::before {
    content: "";
    background: url("https://wallpapercave.com/wp/wp12683639.jpg") no-repeat center center/cover;
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 0.7;
  }
`;

export default Home;
