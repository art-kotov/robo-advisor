// Core
import React from "react";
import styled from "styled-components";
// Instruments
import mainImage from "assets/images/main-screen.png";
import logo from "assets/images/logo-white.svg";

const TemplateEnter = ({ children }) => {
  return (
    <Wrapper>
      <div className="bg-image">
        <header>
          <img src={logo} alt="Robo Advisor" />
        </header>
      </div>
      <div>
        <header>123</header>
        {children}
        <footer>footer</footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .bg-image {
    header {
      height: 80px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      padding-inline-end: 73px;
      background-color: #1d6ae5;
    }
    background: url(${mainImage}) no-repeat left 80px;
    background-size: cover;
  }
`;

export default TemplateEnter;
