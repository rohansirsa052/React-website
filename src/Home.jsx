import React from 'react'
import HomeSection from './componants/HomeSection'
import styled from "styled-components";
import Contact from './Contact';
import Services from './Services'
const Home = () => {
  return (
    <React.Fragment>
    <Wrapper className='homesection'>
      <HomeSection/>
    </Wrapper>
    <Services/>
    <Contact/>
   
    </React.Fragment>
  )
}
const Wrapper = styled.section`
&::before {
    content: "";
    background: url("images/bg2.png") no-repeat center center/cover;
    top: 0px;
    left: 0px;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 0.7;
  }
`;

export default Home
