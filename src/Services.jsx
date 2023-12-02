import React from "react";
import styled from "styled-components";
 import { NavLink } from "react-router-dom";
import { Button } from "./styls/Button";
import Sdata from "./Servicesdata"; // Update the path to your Sdata file
// import Header from "./componants/Header";

const Services = () => {
 

  return (
    <React.Fragment>
    
    <Wrapper className="section">
    <h2 style={{textAlign: "left", fontSize: "7rem", fontFamily: "uiSerif", margin: "4rem 0 1rem 3rem", fontWeight: "400", color: " #7df957"}}  >Our Services</h2>
      <div className="container grid grid-three-column">
     
        {Sdata.map((curElem) => {
          const { id, tittle,description, img_src, Link } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={img_src} alt={tittle} />
              </figure>
              <div className="card-data">
                <h3 style= {{textAlign: "center", fontFamily: "uiSerif"}}>{tittle}</h3>
                <p style= {{textAlign: "center", fontFamily: "uiSerif"}}>{description}</p>
              <NavLink className="navbar-link" to={Link}>
              <Button className="btn">Read More</Button>
               </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
    </React.Fragment>
  );
};

// Rest of the code remains the same...


const Wrapper = styled.section`
  padding-bottom: 3rem;
  background-color: rgb(227, 227, 227);

  .container {
    max-width: 150rem;
    padding: 0 2rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid #7df957;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-size: 1.4rem;

      &:hover {
        background-color: #7df957;
        color: black;
        font-weight: bold;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
