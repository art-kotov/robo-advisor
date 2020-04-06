// Core
import React from "react";
import styled from "styled-components";
// Instruments
import logo from "../../logo.svg";
import "./App.css";

function App() {
  return (
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
          Learn React
        </a>
      </header>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  direction: ${(props) => props.theme.direction};
`;

export default App;
