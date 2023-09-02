import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styls/Button";

// import { useGlobalContext } from "../context";

const HeroSection = () => {
//   const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Who we are</p>
          <h1 className="hero-heading">FINTECH</h1>
          <p className="hero-para">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae itaque consectetur ab minima,
            modi consequatur odio tenetur quisquam saepe nihil.

          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
         
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
    background: linear-gradient(red, black);
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.5rem;
    color: white;
    
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
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

export default HeroSection;
