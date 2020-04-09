// Core
import React from "react";
import styled from "styled-components";
// Instruments
import logo from "assets/images/logo-white.svg";

const TemplateEnter = ({ children }) => {
  return (
    <Wrapper>
      <header className="header">
        <div className="header-start">
          <span>Sign Up</span>
        </div>
        <div className="header-end">
          <img src={logo} alt="robo advisor" />
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px 1fr auto;
`;

export default TemplateEnter;
