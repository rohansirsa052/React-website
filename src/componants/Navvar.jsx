import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu from "./Dropdown";

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
          color: ${props => (props.isHeaderScrolled ? "black" : "white")};
          transition: color 0.3s linear;
          padding: 8rem 0;
        }
        
        &:hover,
        &:active {
          color: #7df957;
          filter: brightness(1.2);
        
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
  }
`;

const Navbar = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setIsHeaderScrolled(false); 
    } else {
      setDropdown(true);
      setIsHeaderScrolled(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setIsHeaderScrolled(false); 
    } else {
      setDropdown(false);
        setIsHeaderScrolled(true);
    }
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderScrolled(true);
    } else {
      setIsHeaderScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <React.Fragment>
      <Nav isHeaderScrolled={isHeaderScrolled} >
        <div className="menuIcon">
          <ul className="navbar-list">
            <li>
              <NavLink className="navbar-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/about">
                About
              </NavLink>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavLink className="navbar-link" to="/service">
                Services 
                {dropdown && <DropdownMenu />}
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </React.Fragment>
  );
};
export const DropdownStateContext = React.createContext();

export default Navbar;
