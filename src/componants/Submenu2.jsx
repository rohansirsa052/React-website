import React from 'react'
import HomeSection from './HomeSection';
import styled from "styled-components";
const Submenu1 = () => {

    const Data= {
        topData: "",
        mainHeading : "APPLICATION ENGINEERING",
        Button: "Read more"
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
    background: url("https://finxsystems.com/wp-content/uploads/2023/04/cropped-Intelligent-Automation-scaled-1.jpg") no-repeat center center/cover;
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 2;
  }
`;
export default Submenu1
