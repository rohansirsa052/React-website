import React from "react";
import styled from "styled-components";
import { Button } from "../styls/Button";
const FrontPageServices = () => {
  return (
    <Wrapper>
      <div className="c">
        <div className="row">
          <div className="col-md-4 mb-3" >
            <h1 className="services-left-title">
            Engineering Successful Outcomes
              </h1>
        
            <div class="services-left-content t-b-2">
              <p class="content">
                Helping you engineer capabilities that predictably and
                consistently achieve targeted business outcomes is the entire
                reason we exist.
              </p>

              <ul class="list">
                <li class="mb-1 lead">
                  <b>Increase Revenue</b>
                </li>
                <li class="mb-1 lead">
                  <b>Reduce Costs</b>
                </li>
                <li class="mb-1 lead">
                  <b>Mitigate Risk</b>
                </li>
                <li class="mb-1 lead">
                  <b>Accelerate Innovation</b>
                </li>
              </ul>

              <p class="content">
                Unlock transformational technologies, strategies, and solutions
                that achieve your successful outcomes.
               
              </p>
              <Button className="btn ">
              Get in touch 
                </Button>
             
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6"> 
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
          <a href="/"> <h2> Digital Operations and Automation <p className="visible">some text wriiten <span className="innerText2">...</span></p> <p className="innerText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores.</p> <hr/></h2></a>  
         
        

        
          </div>
       
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .c {
    margin: 3rem 3rem 15rem 4rem;

    .row {
     margin-top: 3rem;
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: 1.5fr 0.5fr 1.8fr 0.2fr;


      .mb-3 {
        display: grid;
        grid-template-rows: 0.5fr 1.5fr;
        
            .services-left-title{
                font-size: 5.5rem;
                font-family: ui-serif;
            }
        
      }
      .content{
        font-family: ui-serif;
        font-size: 2rem;
      }
      .list{
    font-size: 2rem;
    margin-top: 2rem;
}
      }
      .lead{
        padding-bottom: 1rem;
      }
      .btn {
    
        margin-top: 2rem;
        width: 28%;
        height: 10%;
        padding: 0 0;
        background-color: black;
        border: 0.1rem solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.4rem;
        &:hover {
          color: #7df957;
          font-weight: bold;
        }
    }
    .col-md-6{
        margin-top: 3rem;
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4,1fr);
}   
    hr{
    width: 90%;
    border-top: 1.4px solid black;
    }
    .innerText{
        margin:0;
       visibility: hidden;
       font-family: "Neue Haas Grotesk", Helvetica, sans-serif !important;
       text-align: left;
     
       
    }
    .visible{
        font-family: "Neue Haas Grotesk", Helvetica, sans-serif !important;
        font-size: 1.65rem;
    }
    h2{
        font-size: 20px !important;
        font-family: "Neue Haas Grotesk", Helvetica, sans-serif !important;
        text-align: left;
        display: block;
        font-weight: bold;
       color: black;
    }
    a{
        color: black;
    }
    h2:hover .innerText {
        visibility: visible;
      }

      h2:hover .innerText2 {
        visibility: hidden;
      }
    }
  }
`;

export default FrontPageServices;
