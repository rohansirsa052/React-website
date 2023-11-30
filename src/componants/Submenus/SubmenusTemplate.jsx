import React from 'react';
import Header from '../Header';
import styled from 'styled-components';

const SubmenusTemplate = (props) => {
  return (
    <SubmenusTemplateWrapper background={props.background}>
      <Header />
      <div className="c">
        <div className="section-hero-data">
          <p className="hero-top-data">{props.topData}</p>
          <h1 className="hero-heading">{props.mainHeading}</h1>
          {/* <p className="hero-para">{props.para}</p> */}
        </div>
      </div>
    </SubmenusTemplateWrapper>
  );
};

const SubmenusTemplateWrapper = styled.section`
  height: 500px;
  width: 100vw;
  background: url(${props => props.background}) no-repeat center center/cover;

  .c {
    display: flex;
    top: 30%;
    margin-left: 5rem;
    position: sticky;
    padding-bottom: 4rem;

    .hero-heading {
      text-transform: uppercase;
      font-size: 5.9rem;
      color: white;

      @media (max-width: 768px) {
        font-size: 3.9rem;
      }
    }
  }
`;

export default SubmenusTemplate;
