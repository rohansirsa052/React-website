import React from 'react'
import HomeSection from './componants/HomeSection';
import styled from "styled-components";
const About = () => {
  const Data= {
    topData: "who we are",
    mainHeading : "About Us",
    para: "About Para",
    Button: "Call Now"
  }
  return (
    
    <AboutSectionWrapper>
    <HomeSection  {...Data}/>
    </AboutSectionWrapper>
  
  )
}
const AboutSectionWrapper = styled.section`
  &::before {
    content: "";
    background: url("https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/about-us-banner.jpg") no-repeat center center/cover;
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 2;
  }
`;

export default About

