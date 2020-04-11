// Core
import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

//Instruments

//Components
import Header from "../../components/Header";
import MenuAside from "../../components/MenuAside";
import Footer from "../../components/Footer";

const TemplateBase = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MenuAside />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default observer(TemplateBase);

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
  background-color: var(--с-gray-light);
  grid-area: main;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  padding-block-start: 30px;
  padding-block-end: 30px;
`;
