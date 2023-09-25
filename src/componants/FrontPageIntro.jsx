import React from 'react'
import styled from 'styled-components';
import web from '../images/img2.svg'
const FrontPageIntro = () => {
  return (
    <Wrapper>
     
      <div className="container grid grid-two-column">
      <div className="left"><div >
     <img src={web} class="logo" alt="" />
  </div></div>
      <div className="right"><h4 class="intro-subtitle">
      Clients rely on ThoughtFocus for domain expertise, innovation, modernization, and the creative use of emerging technologies to create new products and platforms, amplify investments, accelerate ROI, and achieve rapid economies of scale.
  </h4>   <h1 className='heroHeading' > Rapidly scale for success</h1></div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    .container{
        margin-top: 3rem;
        display: flex;
    justify-content: center;
    align-items: center;
        .left{
            .logo{
                height: 90vh;
                width: 36vw;
            }

        }
        .right{
            .intro-subtitle{
                margin-bottom: 1rem;
                font-size: 2rem;
                max-width: 87%;
                font-family: 'Lora', serif;
                font-weight: 100;
            }
            }
            .heroHeading{
                font-weight: 600;
                  font-size: 4.8rem;
                  font-family: 'Lora', serif;

                  
            }
        }
    }
`


export default FrontPageIntro
