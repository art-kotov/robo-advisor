// Core
import "./ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import { ThemeProvider } from "styled-components";

// Store
import { store } from "./store/rootStore";
// Instruments
import "./index.css";
// Components
import App from "./components/App";

const theme = {
  direction: "rtl",
};

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
