import React from 'react'
import styled from 'styled-components';

const FrontPageIntro = () => {
  return (
    <Wrapper>
     
      <div className="container">
      <div className="left">
      <img src="https://finxsystems.com/wp-content/uploads/2023/04/medium-shot-business-team-work-1536x981.jpg" alt="" />
      </div>

      <div className="right">
      <h1 className='heroHeading' >YOUR TECHNICAL PARTNER SPECIALIZES IN CORE BANKING SOLUTIONS.</h1>
      <div className="intro-subtitle">
      Welcome to Finxsystems! We are a team of experienced professionals with a strong background in core banking solutions. Our team has extensive knowledge and experience in developing, implementing, and integrating core banking solutions and cutting-edge FinTech innovations for financial institutions
  </div>  </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`


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
        @media (max-width:  600px)  {
            width: 80vw;
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
                @media (max-width:  768px) {
                    font-size: 3.8rem;
                  
                }
            }
    }  
}
`


export default FrontPageIntro
