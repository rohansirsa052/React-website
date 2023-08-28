import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
   
    const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }`
 
  return (
    <React.Fragment>
    <Nav>
      <div className= "menuIcon">   
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link" to="/">Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link" to="/about">About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link" to="/service">Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link" to="/contact"> Contact
            </NavLink>
          </li>
        </ul>       
      </div>
    </Nav>
    </React.Fragment>
  );
};

export default Navbar;
