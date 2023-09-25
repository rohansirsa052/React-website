import React from "react";
import styled from "styled-components";
import { Button } from "./styls/Button";

const Contact = () => {
  const Wrapper = styled.section`
    .c {
      height: 150vh;
      width: 100vw;
      background: black;
      padding-top: 6rem;
    }
   
    .mapStarts {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40vh;
      width: 90vw;
      background: black;
      padding: 0 3rem;
      margin: 0 5rem;
      border: 1px solid #7df957;
      border-radius: 10px;
    }
    .startsBlock {
      display: flex;
      padding: 0;
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
    .map{
      padding-top: 7rem;
    }

    .map-header{
      padding-top: 0rem;
      float: right;
      width: 40%;
      margin-right: 3%;
    }
    .header-title{
      font-size: 6rem;
      font-family: ui-serif;
    }
    .header-content{
      font-size: 1.5rem;
      color: white;
      margin: 2rem 0;
      line-height: 2.5rem;
      font-family: "Lora", serif;
    }
    .btn {
    
      margin-top: 4rem;
      width: 200px;
      height: 50px;
      padding: 0 0;
      background-color: black;
      border: 1px solid #7df957;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.4rem;
      &:hover {
        color: black;
        background-color:  #7df957;
        font-weight: 600;
      }
  }
  }
  
  };
  .NavlinkText{
    color: #7df957;
  }
  `;

  return (
    <Wrapper>
      <div className="c">
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
          <div className="startsBlock">
            <h3 class="block-title t-h-1">2000+</h3>
            <div class="block-content t-b-1">
              Years of service <br /> excellence
            </div>
          </div>
        </div>
        <div className="map">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="50%"
        height="430"
        style={{ border: '10px solid black', padding: '0 4rem', borderRadius: '100px' }}

        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div class="map-header">
         <div class="map-header-interior is-animated" data-animate="stagger">
            <h1 class="header-title content-gradient t-h-2">
             Engineering Successful Outcomes
            </h1>
            <div class="header-content t-b-2">
              Schedule a whiteboard session and learn the ThoughtFocus process
              for creating new products and platforms, amplifying investments,
              accelerating ROI, and achieving rapid economies of scale.
            </div>
            <Button className="btn ">
          Schedule a call 
          </Button>
          </div>
        </div>
        </div>
      </div>
     
    </Wrapper>
  );
};

export default Contact;
