// Core
import React, { useContext } from "react";
import styled from "styled-components";
import { MobXProviderContext, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  const { uiStore, userStore } = useContext(MobXProviderContext);
  const { i18n } = useTranslation();
  return (
    <Wrapper>
      <button onClick={() => userStore.setStatus()}>STATUS</button>
      <button
        onClick={() => {
          uiStore.setDirection(uiStore.direction === "rtl" ? "ltr" : "rtl");
          i18n.changeLanguage(uiStore.direction === "rtl" ? "ar" : "en");
        }}
      >
        LANG
      </button>
      <NavLink to="/sign-in">Sign In</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/survey">Sign Survey</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  direction: ltr;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  box-sizing: border-box;
  z-index: 999;
  a {
    color: red;
    margin: 5px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background-color: white;
    border: 2px solid #61dafb;
    border-radius: 6px;
    margin: 10px;
  }
`;

export default observer(AdminPanel);
