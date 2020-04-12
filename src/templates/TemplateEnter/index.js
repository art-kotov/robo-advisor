// Core
import React from "react";
import styled from "styled-components";
import { Trans } from "react-i18next";
import { useLocation } from "react-router-dom";
// Instruments
import logo from "../../assets/images/logo-white.svg";
// Components
import EnterBackgroundImage from "../../components/EnterBackgroundImage";
import EnterFooter from "../../components/EnterFooter";

const TemplateEnter = ({ children }) => {
  const { pathname } = useLocation();

  const setTitle = (pathname) => {
    switch (pathname) {
      case "/sign-up":
        return <Trans i18nKey="signUp.signUp" />;
      case "/survey":
        return "Survey";
      default:
        return <Trans i18nKey="signIn.signIn" />;
    }
  };

  return (
    <Wrapper pathname={pathname}>
      <div className="header-start">
        <img src={logo} alt="robo advisor" />
      </div>
      <div className="header-end">
        <span className="header-title">{setTitle(pathname)}</span>
      </div>
      <div className="content">{children}</div>
      <div className="bg-image">
        <EnterBackgroundImage />
      </div>
      <div className="footer">
        <EnterFooter />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  //grid-template-columns: ${({ pathname }) =>
    pathname === "/survey" ? "300px 1fr" : "1fr 1fr"};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px 1fr 115px;
  background-color: var(--с-gray-light);
  .header-start {
    grid-area: 1/1/2/2;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--c-blue);
    padding-inline-end: 73px;
  }
  .header-end {
    grid-area: 1/2/2/-1;
    display: flex;
    align-items: center;
    padding-inline-start: 103px;
    background-color: var(--c-white);
  }
  .header-title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--c-blue);
  }
  .content {
    max-width: ${({ pathname }) =>
      pathname === "/survey" ? "555px" : "335px"};
    padding-top: 100px;
    padding-inline-start: 103px;
    grid-area: 2/-1/3/2;
  }
  .bg-image {
    grid-area: 2/1/-1/2;
  }
  .footer {
    padding-inline-start: 103px;
    grid-area: 3/-1/-1/2;
  }
`;

export default TemplateEnter;
