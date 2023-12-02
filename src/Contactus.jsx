import React from 'react'
import styled from "styled-components";
import {Button} from "./styls/Button";
import SubmenusTemplate from './componants/Submenus/SubmenusTemplate';
const Contactus = () => {

  const Data= {
    topData: "",
    mainHeading : "Feel Free to contact us",
    Button: "Call Now",
    background: "https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/capabilities-bg/Digital-Operations-and-Intelligent-Process-Automation.jpg"
  }


  return (
    <Submenu1SectionWrapper>
    <SubmenusTemplate {...Data} />
    <div className="container"  >
    <div className="left">
    <img src="https://finxsystems.com/wp-content/uploads/2022/04/Mask-group-1-2.jpg" alt="" />
    </div>

    <div className="right">
    <h2  style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}} >CONTACT US</h2>
    <h1 className='heroHeading' >DON’T HESITATE TO GET IN TOUCH WITH US</h1>
    <p style={{textAlign: "left", fontSize: "2rem",  fontFamily: "uiSerif"}}>Our vision is to revolutionize the banking industry by providing innovative and customized software solutions for banks using the Fiserv DNA or any other core platform, empowering them to deliver exceptional customer service, drive growth, and stay ahead of the competition</p>
  </div>
    <div className="left">
   </div>
    </div>
        <div className="c5">
        
        <div className="box1">
        
        <h1> GET IN TOUCH</h1>
        <p>Phone: +2(02)2345678</p>
        <p>Email: <span style={{color: "red", fontFamily: "uiSerif", fontWeight: "600" }}> careers@finxsystems.com </span></p>
        <p>Public Relations: pr@finxsystems.com</p>
        <p>Inquiries: info@finxsystems.com</p>
        <p>Address: 18 Mahamoud Azmy Street,off 26th July Street</p>
        </div>
        <form action="" className='form'>
        <div className="box2">
        
        <input type="text"  name='name' placeholder='Enter your name' />
        <input type="text" name='email' placeholder='Enter Your email' />
        <input type="number" name='phone' placeholder='Enter your phone No.' />
        
        <Button className='btn'>Submit </Button>
        </div>
        <div className="box3">
        <textarea name="msg" id="" cols="50" rows="10"  placeholder='Your Message'></textarea>
        </div>
        
        </form>
        
        
        
        
        
        </div>
    </Submenu1SectionWrapper>
  )
}
const Submenu1SectionWrapper = styled.section`
.container{
    background-color: #EBF2F9;
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
               
                 
              }
             
              
      }  
    }
      .c5{
            padding: 15rem 0;
            background: url("https://wallpapercave.com/dwp2x/wp10039294.jpg") no-repeat center center/cover;

      
        .box1{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
           
            h1{
                font-family: ui-serif;
                font-size: 5rem;
                color: white;
            }
            p{
                font-family: ui-serif;
                color: white;
            }
        }

        .form{
            padding: 6rem 0 0 4rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            @media (max-width:  500px) {
                    grid-template: none;
            }

        .box2{
            display: flex;
            flex-direction: column;
            width: 50vw;
            gap: 2rem;
            @media (max-width:  500px) {
                width: 90vw;
        }

            .btn {
               
                background-color: rgb(0 0 0 / 0%);
                border: 0.1rem solid  #7df957;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #7df957 !important;
                font-size: 1.4rem;
                margin-top: 0.7rem;
                width: 232px;
              
                &:hover {
                  background-color: black;
                  color: #fff;
                  font-weight: bold;
                }
              }
        }
        .box3{
            width: 50vw;
        }

        input, textarea{
            border: 2px solid white;
            border-radius: 13px;
        }
    }
      
`;
export default Contactus
