// Core
import React from "react";
import styled from "styled-components";

//Instruments

//Components
import Header from "../../components/Header";

const TemplateBase = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Aside>aside</Aside>
      <Main>{children}</Main>
      <Footer>footer</Footer>
    </Wrapper>
  );
};

export default TemplateBase;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 234px 1fr;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    "aside header"
    "aside main"
    "aside footer";
`;

//main

const Main = styled.main`
  background-color: green;
  grid-area: main;
`;
const Aside = styled.aside`
  background-color: grey;
  grid-area: aside;
`;
const Footer = styled.footer`
  background-color: black;
  grid-area: footer;
`;
