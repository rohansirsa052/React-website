import React from 'react';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componants/Footer";
import Submenu1 from "./componants/Submenu1";
import Submenu2 from "./componants/Submenu2";
import Submenu3 from "./componants/Submenu3";
import Submenu4 from "./componants/Submenu4";
import Submenu5 from './componants/Submenu5';
import Submenu6 from './componants/Submenu6';
 import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
// import GoToTop from "./components/GoToTop";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Submenu1" element={<Submenu1/>} />
          <Route path="/Submenu2" element={<Submenu2/>} />
          <Route path="/Submenu3" element={<Submenu3/>} />
          <Route path="/Submenu4" element={<Submenu4/>} />
          <Route path="/Submenu5" element={<Submenu5/>} />
          <Route path="/Submenu6" element={<Submenu6/>} />
          
          
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
