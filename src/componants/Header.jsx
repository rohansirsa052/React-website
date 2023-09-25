import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu from "./Dropdown";
import { Button } from "../styls/Button";

const Header = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    setIsHeaderScrolled(window.innerWidth >= 960);
  };

  const onMouseLeave = () => {
    if (window.scrollY > 0) {
      setIsHeaderScrolled(true);
    }else{
    setIsHeaderScrolled(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setIsHeaderScrolled(true); 
    } else {
      setDropdown(true);
      setIsHeaderScrolled(true);
    }
  };
console.log(window.innerHeight);
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setIsHeaderScrolled(true); 
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
      <MainHeader isHeaderScrolled={isHeaderScrolled} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="logo">
        <img className="logoImage" src="https://finxsystems.com/wp-content/uploads/2023/04/logo-2.svg" alt="" /></div>

        <Nav isHeaderScrolled={isHeaderScrolled}>
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
              <div
              onMouseEnter={onMouseEnter1}
              onMouseLeave={onMouseLeave1}
              className="navbar-link-wrapper"
            >
              <li>
             
                <NavLink className="navbar-link" to="/service">
                  Services
                  {dropdown && <DropdownMenu />}
                </NavLink>
             
            </li>
            </div>
            
              <li>
                <NavLink className="navbar-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </Nav>

        <Button className="btn">
          <NavLink className="NavlinkText" to="/contact">Schedule a call</NavLink>
        </Button>
        {/* <div className='menu-icon' onClick={handleClick}>
        //   <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
  </div> */}
        
      </MainHeader>
    </React.Fragment>
  );
};

const MainHeader = styled.header`
  position: fixed;
  top:0;
  right: 0;
  left:0;
  padding: 0 1rem;
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  color: white;
  align-items: center;
  z-index: 32;
  background-color: ${props => props.isHeaderScrolled ? 'white' : 'initial'};

  .logo {
    height: auto;
    max-width: 80%;
    margin-right: 5rem;
    margin-left: 0;
    margin-top: 0rem;
  };

  a{
    color: red;
  }
  .navbar-link {
    &:link,
    &:visited {
      color: ${props => (props.isHeaderScrolled ? "black" : "white")};
    }
  }
  .btn {
    position: absolute;
    right: 2rem;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid  #7df957;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7df957 !important;
    font-size: 1.4rem;
    
    &:hover {
      background-color: black;
      color: #fff;
      font-weight: bold;
    }
  }

  .NavlinkText{
    color: #7df957;
    &:hover{
      color:  #7df957;
    }
  }
`;
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
`;


export default Header;
