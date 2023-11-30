import React from 'react'
import styled from "styled-components";
import Part1 from './Submenus/Parts/Part1';
import SubmenusTemplate from './Submenus/SubmenusTemplate';
const Submenu1 = () => {

  const Data= {
    topData: "",
    mainHeading : "ARTIFICIAL INTELLIGENCE",
    Button: "Call Now",
    background: "https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/capabilities-bg/Digital-Operations-and-Intelligent-Process-Automation.jpg"
  }

  const Data2= {
    headingText: "Improve your digital operations with our",
    spanText: "process reengineering services.",
    para: " Our AI solutions leverage new-age technologies like artificial intelligence and machine learning to help banks and credit unions extend the capabilities of their existing systems and solve complex problems in a more efficient and cost-effective manner. Our solutions automate manual processes, reduce errors, and provide real-time insights into customer behavior and market trends",
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
export default Submenu1
