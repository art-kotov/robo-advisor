// Core
import React, { useContext } from "react";
import styled from "styled-components";
import { MobXProviderContext, observer } from "mobx-react";

const AdminPanel = () => {
  const { uiStore, userStore } = useContext(MobXProviderContext);

  return (
    <Wrapper>
      <button
        onClick={() =>
          uiStore.setDirection(uiStore.direction === "rtl" ? "ltr" : "rtl")
        }
      >
        LANG
      </button>
      <button onClick={() => userStore.setStatus()}>STATUS</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  direction: ltr;
  background-color: #282c34;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0.1;
  z-index: 999;
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
