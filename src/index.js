// Core
import "./ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// Components
import AppProvider from "./components/AppProvider";

ReactDOM.render(<AppProvider />, document.getElementById("root"));

serviceWorker.unregister();
