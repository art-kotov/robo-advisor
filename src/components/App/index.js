// Core
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { MobXProviderContext, observer } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Instruments
import GlobalStyle from "../../theming/GlobalStyle";
import theme from "../../theming/theme";
import logo from "../../logo.svg";
import "./App.css";

function App() {
  const { uiStore } = useContext(MobXProviderContext);

  useEffect(() => {
    document.documentElement.setAttribute("dir", uiStore.direction);
  }, [uiStore.direction]);

  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={{ ...theme, direction: uiStore.direction }}>
          <>
            <GlobalStyle whiteColor />
            <button
              style={{
                width: "100%",
              }}
              onClick={() =>
                uiStore.setDirection(
                  uiStore.direction === "rtl" ? "ltr" : "rtl"
                )
              }
            >
              switch
            </button>
            <div className="App">
              <header className="App-header">
                <Title>Hello World!</Title>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/Index.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React!
                </a>
              </header>
            </div>
          </>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  direction: ${(props) => props.theme.direction};
  ${(props) => props.theme.getLeftPosition()}: 20px;
`;

export default observer(App);
