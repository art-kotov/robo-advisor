// Core
import "./ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
// Components
import App from "./components/App";
// Store
import store from "./store/rootStore";
// Instruments
import "./index.css";
import "./i18n";

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
