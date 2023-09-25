import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "./Header";
import Typed from 'typed.js';

// import { useGlobalContext } from "../context";

const HomeSection = (props) => {
//   const { name, image } = useGlobalContext();
const el = React.useRef(null);
useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Domain Expertise.', 'Engineering Excellence', 'Digital Evoluation'],
    typeSpeed: 200,
     onComplete: function () {
        // Restart the animation when it finishes
        typed.reset();
      }
    
  });
  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);


  return (    
    <React.Fragment>
    <Header/>
    <Wrapper>   
      <div className="container">
        <div className="section-hero-data">
          <p className="hero-top-data">{props.topData}</p>
          <h1 className="hero-heading">Think <span className="spantext" ref={el} /> </h1>
          <p className="hero-para">
          {props.para}
          </p>
         
        </div>

        {/* for image  */}
        <div className="section-hero-image">
        </div>
      </div>
    </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container{
    position: relative;
    top: 15rem;
  }

 .spantext{
  color: white;
 }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.5rem;
    color: white;
    
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 5.9rem;
  }
  .header-is-scroll{
    background: white !important;
  color: black; 
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-weight: 700;
    color: #dae4e0;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HomeSection;
