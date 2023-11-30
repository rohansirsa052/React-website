import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu from "./Dropdown";
import { Button } from "../styls/Button";
import "./Responsive.css";



const Header = () => {
  const [isheaderscrolled, setisheaderscrolled] = useState(false);
  const [showmediaicons, setshowmediaicons] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const onMouseEnter = () => {
    setisheaderscrolled(window.innerWidth >= 960);
  };

  const onMouseLeave = () => {
    if (window.scrollY > 0 ) {
      setisheaderscrolled(true);
    }else{
    setisheaderscrolled(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setisheaderscrolled(true); 
    } else {
      setDropdown(true);
      setisheaderscrolled(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setisheaderscrolled(true); 
    } else {
      setDropdown(false);
        setisheaderscrolled(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setisheaderscrolled(true);
    } else {
      setisheaderscrolled(false);
    }
  };

  

  window.addEventListener("scroll", handleScroll);
  
 

  return ( 
    <React.Fragment>
      <MainHeader className={
        showmediaicons ? "mobile-menu-link" : "main-nav"
      }  isheaderscrolled={isheaderscrolled}  onMouseEnter={onMouseEnter}  showmediaicons={showmediaicons}  onMouseLeave={onMouseLeave}>
        
          {/* 1st logo part  */}
      <div className="logo">
        <img className="logoImage" src="https://finxsystems.com/wp-content/uploads/2023/04/logo-2.svg" alt="" /></div>
        {/* 2nd menu part  */}
        <Nav isheaderscrolled={isheaderscrolled}>
          <div  className={
            showmediaicons ? "mobile-menu-link1" : "menu-link"
          }>
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
        {/* 3rd call button */}
      
        <Button className="btn">
          <NavLink className="NavlinkText" to="/contact">Schedule a call</NavLink>
        </Button>
        <div className='menu-icon' onClick={() => {
          handleClick();
          setshowmediaicons(!showmediaicons);
      }}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>      
      </MainHeader>
    </React.Fragment>
  );
};

const MainHeader = styled.header`
  position: fixed;
  top:0;
  right: 0rem;
  left:0rem;
  padding: 0 1rem;
  display: grid;
  height: 8rem;
  grid-template-columns:  0.4fr 2.3fr 1.1fr 0.2fr;
  color: white;
  align-items: center;
  z-index: 32;
  background-color: ${props => (props.isheaderscrolled ) ? 'white' : 'initial'};
  @media (max-width:  918px) {
    background-color: ${props => (props.showmediaicons ) ? 'white' : 'initial'};
    position:  ${props => (props.showmediaicons ) ? 'fixed' : 'static'};
  }
  
 
 

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
      color: ${props => (props.isheaderscrolled ? "black" : "white")};
     
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
    margin-top: 0.7rem;
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
  
  .menu-icon{
    visibility: hidden;
  }
  .logoImage{
    width: 15vw;
 }
  @media (max-width:  918px) {
  
    .menu-icon{
      visibility: visible;
      float: right;
      width: fit-content;
      text-align: right;
      grid-column: 4/5;
      display: visible;
      color: ${props => (props.isheaderscrolled || props.showmediaicons) ? 'black' : 'white'};
     
    }
    .btn{
      display: none;
    }
    .menu-link{
      display: none;
    }
    .logoImage{
      width: 43vw;
   }
    .mobile-menu-link{
      background-color: white !important;
      display: inline-block;
      height: 100%;
    }
      .mobile-menu-link1 ul {
        flex-direction: column;
        height: max-content;
        background-color: #fff;
        width: 100%;
        position: absolute;
        left: 0%;
        top: 57px;
        border: 5px solid white;
        text-align: left;
        transition: all 0.5s;
        transform-origin: top;
        box-shadow: 0px 31px 31px 4px rgb(12 11 11 / 34%);
        padding: 20px;
        border-radius: 12px
        }
        
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
          color: ${props => (props.isheaderscrolled ? "black" : "white")};
          transition: color 0.3s linear;
          padding: 3rem 0;
        }

        &:hover,
        &:active {
          color: #7df957;
          filter: brightness(1.2);
        }
      } 
    }
    @media (max-width:  918px) {

      .navbar-link {
        &:link,
        &:visited {
         
          color:black !important;
        }
    }
  }
`;


export default Header;
