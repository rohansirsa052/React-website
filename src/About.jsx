import React from 'react'
import styled from "styled-components";
import AboutSectionPart from './AboutSectionPart';
import SubmenusTemplate from "./componants/Submenus/SubmenusTemplate";
const About = () => {

  const Data= {
    topData: "",
    mainHeading : "About us",
    Button: "Call Now",
    background: "https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/insights-bg/success-stories-new-1.jpg"
  }


  return (
    <Submenu1SectionWrapper>
    <SubmenusTemplate {...Data} />
    <div className="container">
    <div className="left">
    <img src="https://finxsystems.com/wp-content/uploads/2022/04/image-43-1-1.jpg" alt="" />
    </div>

    <div className="right">
    <h2  style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}} >What we do</h2>
    <h1 className='heroHeading' >WE HELP YOU TO BUILD NEXT-GEN CORE BANKING SOLUTIONS..</h1>
   </div>
    </div>

   <AboutSectionPart/>

   <div className="container"  style={{backgroundColor:"#F2E7F2" , padding: "5rem"}}>
   <div className="right">
   <h2  style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}} >WE ARE VISIONARY</h2>
   <h1 className='heroHeading'  >EMPOWERING THE BANKS WITH INNOVATIVE AND CUSTOMIZED SOFTWARE SOLUTIONS.</h1>
   <p style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}}>Our vision is to revolutionize the banking industry by providing innovative and customized software solutions for banks using the Fiserv DNA or any other core platform, empowering them to deliver exceptional customer service, drive growth, and stay ahead of the competition</p>
  </div>
    <div className="left">
    <img src="https://finxsystems.com/wp-content/uploads/2022/04/Mask-group-1-1.jpg"  alt="" />
    </div>
    </div>


    <div className="container">
    <div className="left">
    <img src="https://finxsystems.com/wp-content/uploads/2022/04/image-46-1.jpg" alt="" />
    </div>

    <div className="right">
    <h2  style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}} >OUR GOALS</h2>
    <h1 className='heroHeading' >OUR GOALS ARE DIRECTLY RELATED TO YOUR RESULT</h1>
    <p style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}}>Revolutionize the industry and drive growth with core platform. Our goal is to deliver exceptional service, drive growth and innovation, and maintain our leadership in the financial banking software industry</p>
    <ul>
  <li style={{ fontSize: '2rem', color: 'black', fontFamily: 'ui-serif', listStyleType: 'circle', margin: '1.3rem', marginLeft: '4rem' }}>
    Delivering exceptional service
  </li>
  <li style={{ fontSize: '2rem', color: 'black', fontFamily: 'ui-serif', listStyleType: 'circle', margin: '1.3rem', marginLeft: '4rem' }}>
    Driving growth and profitability
  </li>
  <li style={{ fontSize: '2rem', color: 'black', fontFamily: 'ui-serif', listStyleType: 'circle', margin: '1.3rem', marginLeft: '4rem' }}>
    Fostering innovation and collaboration
  </li>
  <li style={{ fontSize: '2rem', color: 'black', fontFamily: 'ui-serif', listStyleType: 'circle', margin: '1.3rem', marginLeft: '4rem' }}>
    Maintaining leadership position in Financial services
  </li>
</ul>

    </div>
    </div>

   
    
    </Submenu1SectionWrapper>
  )
}
const Submenu1SectionWrapper = styled.section`
.container{
  padding-bottom: 2rem;
  margin-top: 3rem;
  display: flex;
  gap: 6rem;
  justify-content: center;
  align-itmes: center;
  align-items: center;
  @media (max-width:  768px) {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
 

  
    .left{
      img{
        height: 50%;
        width: 40vw;
        @media (max-width:  768px)  {
            width: 90vw;
        }
      }
        @media (max-width:  768px)  {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding-top: 5rem;
          }
        .logo{
          height: 0;
          width:0;  
          @media (max-width: 768px) and (max-height: 933px){
            display: none;
          }
        }
    }
    .right{
        text-align: left;
        grid-column: 2/2;
        @media (max-width:  768px) {
            padding-top: 0rem;
            display: flex;
           
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
         .intro-subtitle{
            text-align: left;
            margin-bottom: 1rem;
            font-size: 2rem;
          
            font-family: 'Lora', serif;
            font-weight: 100;
            }
            
            .heroHeading{
                font-weight: 550;
                font-size: 3.5rem;
                text-align: left;
                font-family: 'Lora', serif;
                color: #339966;  
                @media (max-width:  768px) {
                    font-size: 3.8rem;
                  
                }
             
                ul{
                 
                }
            }
           
            
    }  
    

    .c{
      margin: 6rem 8rem 4rem 8rem;
     
      .headingContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .logoContainer{
        margin: 4rem 0 0 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    
        @media (max-width:  720px) {
          flex-direction: column;
          gap: 5rem;
        }
      }
      .imageContainer{
        display: flex;
        flex-direction: column;
        width: 200px;
        align-items: center;
      }
      img{
        height: 41px;
        width: 40px;
      }
      p{
        text-align: center;
        font-size: 1.7rem;
        font-family: ui-serif;
      }
         h2{
          font-family: ui-serif;
          color: #339966;
         }
         span{
          font-family: ui-serif;
          color: #7df957;
         }
    }
  }


`



export default About
