import React from 'react'
import styled from "styled-components";
import Part1 from './Submenus/Parts/Part1';
import SubmenusTemplate from './Submenus/SubmenusTemplate';
const Submenu5 = () => {

  const Data= {
    topData: "",
    mainHeading : "LEGACY MODERNIZATION",
    Button: "Call Now",
    background: "https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/capabilities-bg/Technology-Strategy-and-Consulting.jpg"
  }

  const Data2= {
    headingText: "IF YOU CAN DREAM IT,",
    spanText: "WE CAN BUILD IT.",
    para: " In today’s world of disruption, your applications must be able to adapt, while satisfying growing demand for stand-out customer experiences. ThoughtFocus works with your business to optimize and future-proof your systems. Our engineers approach complex challenges with creativity and a keen eye for value, applying decades of industry experience in legacy and cutting-edge technologies",
    para2: "We FinX combine deep domain expertise in fintech with advanced data engineering, data science, and statistical analysis techniques to help you solve complex business problems. Our coordinated approach to every AI/ML project enables us to optimize your processes"
  }
  return (
    <Submenu1SectionWrapper>
    <SubmenusTemplate {...Data} />
    <Part1 {...Data2}/>
    </Submenu1SectionWrapper>
  )
}
const Submenu1SectionWrapper = styled.section`

`;
export default Submenu5
