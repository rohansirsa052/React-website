import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from "./Navvar";
import styled from "styled-components";
const Header = () => {
  return (
    <React.Fragment>
    <MainHeader>
    <NavLink to="/">
    <img src="./images/logo.png" alt="logo" className="logo" />
  </NavLink>
  <Navbar/>
    </MainHeader>
    </React.Fragment>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 80%;
  };
 
 
`;

export default Header;
