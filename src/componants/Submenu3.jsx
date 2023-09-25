import React from 'react'
import HomeSection from './HomeSection';
import styled from "styled-components";
const Submenu1 = () => {

    const Data= {
        topData: "",
        mainHeading : "INTELLIGENT AUTOMATION",
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
    background: url("https://finxsystems.com/wp-content/uploads/2023/04/Artificial-Intelligence-scaled.jpg") no-repeat center center/cover;
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
