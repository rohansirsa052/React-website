import React from "react";
import styled from "styled-components";
import { Button } from "../styls/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      {/* footer section */}
      <footer>
        <div className="c">
          <div className="footer-about">
            <div className="logo1">
              <img
                className="logoImage"
                src="https://finxsystems.com/wp-content/uploads/2023/04/logo-2.svg"
                alt=""
              />
            </div>
            <h1 className="services-left-title">
              Engineering Successful Outcomes
            </h1>
            <h2 className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Architecto
              similique corporis, perspiciatis accusantium ullam dolorem magnam
              quae dolor quasi beatae unde maiores odio iusto! Suscipit tempore
              sed ab quos velit.
            </h2>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">

          <div>
          <h1 className="heading"> Home
          </h1>
          <ul>
          <li className="list">
        <NavLink className="navbar-link" to="/">Payments
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Banking and Capital Markets
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Lending
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Manufacturing and B2B
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Higher Education and Public
        </NavLink>
        
        </li>
       
          </ul>
          </div>



        <div className="about">
          <h1 className="heading"> About
          </h1>
          <ul>
          <li className="list">
        <NavLink className="navbar-link" to="/">Payments
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Banking and Capital Markets
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Lending
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Manufacturing and B2B
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Higher Education and Public
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Manufacturing and B2B
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Higher Education and Public
        </NavLink>
        </li>
          </ul>
          </div>

          <div>
          <h1 className="heading"> Services
          </h1>
          <ul>
          <li className="list">
        <NavLink className="navbar-link" to="/">Payments
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Banking
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Lending
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Manufacturing
        </NavLink>
        </li>
          </ul>
          </div>

          <div className="contact">
          <h1 className="heading"> Contect
          </h1>
          <ul>
          <li className="list">
        <NavLink className="navbar-link" to="/">Payments
        </NavLink>
        </li>
        <li className="list">
        <NavLink className="navbar-link" to="/">Payments
        </NavLink>
        <Button className="btn" style={{"marginRight" : "5rem"}} >Get In Touch</Button>
        </li>
       
          </ul>
          <div className="footer-social--icons">
          <div>
            <FaDiscord className="icons" />
          </div>
          <div>
            <FaInstagram className="icons" />
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_blank">
              <FaYoutube className="icons" />
            </a>
          </div>
        </div>
          </div>

            
          </div>
          {/* 3rs column */}
          {/* 4th column */}
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Fintech. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgb(227, 227, 227);
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  .btn {
    margin: 2rem -1rem;
    background-color: black;
    border: 0.1rem solid #7df957;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.4rem;

    &:hover {
      filter: brightness(1.2);
      color: #7df957;
    }
  }

  footer {
   padding-top: 2rem;
    background-color: black;

    .c {
      max-width: 150rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 0.1fr 2.6fr;
      gap: 3rem;

      @media (max-width: 750px) {
        grid-template-columns: 1fr; /* Adjust this according to your layout needs */
      }
    }

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      position: relative;
      top: 58%;
      right: 30%;

      @media (max-width: 750px) {
        top: 20%;
        right: 1%;
      }

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  .services-left-title {
    font-size: 4.5rem;
    font-family: ui-serif;
  }

  .para {
    text-align: left;
    font-size: 2rem;
    color: white;
    margin: 0rem;
    font-family: "Bree Serif", serif;
  }

  .footer-about {
    margin-left: 4rem;
  }

  .grid-two-column1 {
    grid-template-columns: 0.1fr 2.6fr;
  }

  .footer-subscribe {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 2rem;
    gap: 2rem;
    width: 110%;

    @media (max-width: 750px) {
      grid-template: none;
      margin-left: 5rem;
      grid-template-rows: repeat(4, 1fr);
      gap: 0rem;
    }
  }

  .about {
    @media (max-width: 750px) {
      margin-top: -3rem;
    }
  }

  .contact {
    @media (max-width: 750px) {
      margin-top: -8rem;
    }
  }

  .heading {
    color: white;
    text-decoration: underline;
    font-size: 2rem;
    font-weight: bold;
  }

  .list {
    padding: 1rem;
    padding-left: 0rem;
  }

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
      color: white;
      transition: color 0.3s linear;
    }

    &:hover,
    &:active {
      color: #7df957;
      filter: brightness(1.2);
    }
  }

  .logo1 {
   
    margin-bottom: 3rem;
  }

  .logoImage {
    width: 15vw;

    @media (max-width: 750px) {
      width: 38vw;
      margin-left: 2rem;
    }
  }
`;

export default Footer;
