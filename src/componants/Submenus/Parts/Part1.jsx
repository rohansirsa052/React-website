import React from 'react'
import styled from "styled-components";



const Part1 = (props) => {
  return (
    <Wrapper>
    <div  className="c">
    <div className='headingContainer'><h2> {props.headingText}  <span>{props.spanText}</span> </h2>
    <p style={{fontFamily: "uiSerif", margin: "6px 6rem" , textAlign: "center", fontSize: "1.7rem"}}>{props.para}</p>
    </div>

    <div className="logoContainer">  
    <div className='imageContainer' >  <img src="https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/services-icons/DigitalOperations-1.svg" alt="" />
    <para>Grow business rather than headcount</para>
    </div>
    <div className='imageContainer' >  <img src="https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/services-icons/DigitalOperations-2.svg" alt="" />
    <para>Grow business rather than headcount</para>
    </div>
    <div className='imageContainer' >  <img src="https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/services-icons/DigitalOperations-3.svg" alt="" />
    <para>Grow business rather than headcount</para>
    </div>
    <div className='imageContainer' >  <img src="https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/services-icons/DigitalOperations-4.svg" alt="" />
    <para>Grow business rather than headcount</para>
    </div>
    </div>
    </div>

    <div className="c2">
    <div> <h2 style={{textAlign: "left", color: "#7df957",  fontFamily: "uiSerif", margin: "6px 3rem"}}> TRANSFORM INSIGHTS INTO REVENUE  </h2>  <div  style= {{fontSize: "2.2rem",  fontFamily: "uiSerif", color: "white",  margin: "0 3rem"}} > {props.para2} </div>
    <div className="mapStarts">
    <div className="startsBlock">
      <h3 class="block-title t-h-1">19+</h3>
      <div class="block-content t-b-1">
        Years of service <br /> excellence{" "}
      </div>
    </div>
    <div className="startsBlock">
      <h3 class="block-title t-h-1">100%</h3>
      <div class="block-content t-b-1">
        Years of service <br /> excellence
      </div>
    </div>
    <div className="startsBlock">
      <h3 class="block-title t-h-1">99%</h3>
      <div class="block-content t-b-1">
        Years of service <br /> excellence
      </div>
    </div>
  </div>
    </div>

  <div className="box">
  <div className="left"> <h1 >Our Unique Advantage:</h1> 
  <ul style={{listStyleType: "circle"}}>
  <li>Accelerate your fintech vision with effective AI/ML solutions.</li>
  <li>Transform your data into actionable business intelligence.</li>
  <li>Achieve operational excellence and reduce costs.</li>
  <li>Accelerate your fintech vision with effective AI/ML solutions.</li>
  <li>Transform your data into actionable business intelligence.</li>
  <li>Achieve operational excellence and reduce costs.</li>
  
</ul>
  
  
  </div>
  <div className="right">
  <img src="https://finxsystems.com/wp-content/uploads/2023/04/programming-background-collage-2048x1536.jpg" alt="" />
  </div>
  </div>
    </div>


    <div className="c3">
    
    <div>
    <h2>Capabilities</h2>  <h3 style={{ fontSize: "4rem" , "color": "#7df957",   fontFamily: "uiSerif"}}>Increase your competitive edge with an experienced AI/ML partner</h3>  <p>Tailored AI/ML Solutions for Your Unique Business Challenges</p>
    
    <div className="box2">
    <div className="innerbox">  <div> <h1>Consulting Services</h1> </div><p>Take advantage of our expertise in data strategy, evaluation, and exploration, along with our analysis and strategic planning for data pipelines.</p> </div>
    <div className="innerbox">  <div> <h1>Intelligence & Visualization</h1></div>  <p>Discover insights beyond the dashboard by utilizing visualization tools that produce  impactful and data-driven experiences.</p> </div>
    <div className="innerbox"> <div> <h1>AI & ML Technologies</h1> </div> <p>Create intelligent systems that imitate human tasks with reduced effort, and construct chatbots or intelligent assistants utilizing RPA or NLP.</p> </div>
    
    </div>


    </div>
    
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
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
      para{
        text-align: center;
        font-size: 1.7rem;
        font-family: ui-serif;
      }
         h2{
          font-family: ui-serif;
         }
         span{
          font-family: ui-serif;
          color: #7df957;
         }
    }

    .c2 {
      height: auto;
      width: 100vw;
      background: black;
      padding-top: 4rem;
      padding-bottom: 4rem;
      margin-bottom: 3rem;

         
    .mapStarts {
      display: flex;
      justify-content: space-around;
      align-items: center;
     
      background: black;
      padding: 0 0rem;
      margin: 4rem 5rem;
      border: 1px solid #7df957;
      border-radius: 10px;
      @media (max-width:  900px) {
        flex-direction: column;
        height: fit-content;
        gap: 4rem;
        width: auto;
        justify-content: flex-start;
        align-items: baseline;
      }
    }
    .startsBlock {
      display: flex;
      padding: 2rem;
      flex-direction: column;
    }
    .block-title {
      font-size: 7rem;
      font-family: revert;
      font-weight: 501;
      color: white;
    }
    .block-content {
      font-size: 2rem;
      font-family: "Lora", serif;
      color: white;
    }
    para{
      margin-left: 5rem;
    }

    .box{
      margin: 3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width:  820px) {
        flex-direction: column;
      }
      h1{
        font-size: 5rem;
        font-family: ui-serif;
      }
      li{
        font-size: 2rem;
        color: white;
        font-family: ui-serif;
        list-style-type: circle;
        margin: 1.3rem;
        margin-left: 4rem;
        

      }
      ul{
        list-style-type: circle;
      }
      .left{
        width: 66%;
        @media (max-width:  820px) {
          width: 100%;
        }
      }
      .right{
        @media (max-width:  820px) {
          width: 100%;
          margin-left: 5rem;
        }
        img{
          height: 300px;
          width: 41vw;
          @media (max-width:  820px) {
            width: 78vw;
          }
        }
      }
    }

    }

    .c3{
          padding: 5rem;
          
      h2{
        font-family: ui-serif;
        font-size: 4rem;
        text-align: left;
        text-decoration: underline;
      }
      h1{
        font-family: ui-serif;
        font-size: 2rem;
        color: #7df957;
        text-align: center;
        background-color: rgb(227, 227, 227);
        padding-top: 1rem;
      }
      p{
        font-family: ui-serif;
       
      }

      .box2{
        display: flex;
        justify-content: space-between;  
        margin-top: 3rem;
        @media (max-width:  820px) {
         flex-direction:column;
         align-items: center;
         gap: 2rem;
        }
        .innerbox{
           border: 2px solid #F8F0F0;
            width: 33%;
            border-radius: 10px;
            margin: 0 4rem;
            @media (max-width:  820px) {
              width: 75%;
             }

            div{
              background-color: #F8F0F0;
            }
        }

        p{
          font-family: ui-serif;
          text-align: center;
          padding: 1rem;
          padding-top: 0rem;
        }
      }
    }




`
export default Part1
