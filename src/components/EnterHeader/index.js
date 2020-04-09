// Core
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// Instruments
import logo from "../../assets/images/logo-white.svg";
import { Trans } from "react-i18next";

const EnterHeader = () => {
  let { pathname } = useLocation();

  const setTitle = (pathname) => {
    switch (pathname) {
      case "/sign-up":
        return "Sign Up";
      default:
        return <Trans i18nKey="signIn.signIn">Sign In</Trans>;
    }
  };

  return (
    <Header>
      <div className="header-start">
        <img src={logo} alt="robo advisor" />
      </div>
      <div className="header-end">
        <span className="header-title">{setTitle(pathname)}</span>
      </div>
    </Header>
  );
};

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px;
  .header-start {
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--c-blue);
    padding-inline-end: 73px;
  }
  .header-end {
    display: flex;
    align-items: center;
    padding-inline-start: 103px;
  }
  .header-title {
  }
`;

export default EnterHeader;
