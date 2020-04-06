// Core
import React, { useEffect, useState } from "react";
import { Provider } from "mobx-react";
import { store } from "../../store/rootStore";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Instruments
import "../../index.css";
// Components
import App from "../App";

const theme = {
  color: "pale",
};

const AppProvider = (props) => {
  const [direction, setDirection] = useState("rtl");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  return (
    <React.StrictMode>
      <Provider {...store}>
        <Router>
          <ThemeProvider theme={{ ...theme, direction: direction }}>
            <>
              <button
                onClick={() =>
                  setDirection(direction === "rtl" ? "ltr" : "rtl")
                }
              >
                switch
              </button>
              <App />
            </>
          </ThemeProvider>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

export default AppProvider;
