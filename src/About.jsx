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

    height: 550px;
    width: 100vw;
    background: url("https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/about-us-banner.jpg") no-repeat center center/cover;
`;

export default About

