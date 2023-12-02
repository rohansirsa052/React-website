import React from 'react'
import styled from 'styled-components';
const AboutSectionPart = () => {
  return (
    <Wrapper>
    <div  className="c">
    <div className='headingContainer'><h2> MAKE EVERY PRODUCT AND SERVICE CLIMATE POSITIVE BY DEFAULT</h2>
    <p style={{fontFamily: "uiSerif", margin: "6px 6rem" , textAlign: "center", fontSize: "1.7rem"}}>Our AI solutions leverage new-age technologies like artificial intelligence and machine learning to help banks and credit unions extend the capabilities of their existing systems and solve complex problems in a more efficient and cost-effective manner. Our solutions automate manual processes, reduce errors, and provide real-time insights into customer behavior and market trends</p>
    </div>

    <div className="logoContainer">  
    <div className='imageContainer' style={{paddingBottom: "5rem"}} >  <img src="/images/img5.png" alt="" />
    <h1>Assignment</h1>
    <p>Conduct a thorough assessment of the bank's existing IT infrastructure, business processes, and customer needs.</p>
    </div>
    <div className='imageContainer' >  <img src="/images/img4.png" alt="" />
    <h1>PLANNING</h1>
    <p>Based on the assessment, a detailed plan is developed that outlines the specific modernization goals, timelines, resources, and budget.</p>
    </div>
    <div className='imageContainer'style={{paddingBottom: "3rem"}}  >  <img src="/images/img1.png" alt="" />
    <h1>DEVELOPMENT</h1>
    <p>This involves developing customized software solutions and extensions that integrate with the core platform to meet the bank's specific needs.</p>
    </div>
    <div className='imageContainer' >  <img src="/images/img2.png" alt="" />
    <h1>IMPLEMENTATION</h1>
    <p>Once the software solutions have been developed and tested, they are deployed and integrated with the core platform</p>
    </div>
    <div className='imageContainer' >  <img src="/images/img3.png" alt="" />
    <h1>TRAINING AND SUPPORT</h1>
    <p>We offer comprehensive training and ongoing support to ensure seamless integration of the modernized platform into the bank's operationst</p>
    </div>
    </div>
    </div>
    </Wrapper>
  )
}

    const Wrapper= styled.section`
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
          gap: 10px;
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
          height: 120px;
          width: 180px;
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
           h1{
            font-family: ui-serif;
            font-size: 1.5rem;
            color: #339966;
           }
      }
    
    
    `


export default AboutSectionPart
