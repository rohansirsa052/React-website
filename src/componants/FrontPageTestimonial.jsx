import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import logo1 from '../images/logo11.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.jpg';
import logo5 from '../images/logo5.jpg';
import logo6 from '../images/logo6.png';

const FrontPageTestimonial = () => {
  const [activePara, setActivePara] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePara((prevPara) => (prevPara % 4) + 1); // Cycle through paragraphs 1 to 4
    }, 2000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <Wrapper>
      <div className="c">
        <div className="logo-container">
          <img src={logo1} style={{"height": "20%", "width": "14%"}} className="logo" alt="" />
          <img src={logo2} style={{"height": "10%", "width": "10%"}} className="logo" alt="" />
          <img src={logo6} style={{"height": "10%", "width": "10%"}}  className="logo" alt="" />
          <img src={logo3}  style={{"height": "10%", "width": "10%"}} className="logo" alt="" />
          <img src={logo4}  style={{"height": "10%", "width": "10%"}} className="logo" alt="" />
          <img src={logo5} style={{"height": "10%", "width": "10%"}}  className="logo" alt="" />
          <img src={logo6} style={{"height": "10%", "width": "10%"}}  className="logo" alt="" />
        </div>
        <div className="paraContainer">
          {activePara === 1 && (
            <div className="para">
              <h2  style={{"color": "black"}}>
              Lorem ipsum dolor sit amet consectetur <h1> adipisicing elit. Ratione laudantium accusamus quibusdam laborum incidunt id impedit</h1> nam excepturi minus! Aut sapiente magnam rerum, unde expedita nostrum iusto mollitia.
              </h2>
            </div>
          )}
          {activePara === 2 && (
            <div className="para">
              <h2  style={{"color": "black"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat odit blanditiis,<h1> numquam omnis corporis esse itaque explicabo veniam laboriosam,</h1> repellendus eveniet quibusdam sed iste optio possimus quae!
              </h2>
            </div>
          )}
          {activePara === 3 && (
            <div className="para">
              <h2  style={{"color": "black"}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. <h1>x In aliquam soluta obcaecati rem impedit architecto incidunt </h1> sint ipsum suscipit dolore perspiciatis cum, maxime officia laboriosam voluptatibus, qui porro possimus maiores
              </h2>
            </div>
          )}
          {activePara === 4 && (
            <div className="para">
              <h2  style={{"color": "black"}}> 
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum dolore possimus, <h1> iure minima doloremque libero consequuntur? </h1> Rerum adipisci amet cupiditate mollitia, rem incidunt magnam soluta, accusamus, inventore similique deserunt
              </h2>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .c {
   
    width: 100vw;
  }
  .logo-container {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .para{
    margin: 2rem;
  }
  h2 {
    font-size: 3.5rem;
    font-family: ui-serif;
    line-height: 4rem;
  }
  .paraContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
  }
  h1{
    font-family: ui-serif;
    display: inline;
    line-height: 4rem;
    font-size: 3.5rem;
    text-align: center;
  }
  h2{
    text-align: center;
  }
`;

export default FrontPageTestimonial;
