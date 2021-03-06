// Core
import React, { useContext, useEffect } from "react";
import { MobXProviderContext, observer } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Instruments
import GlobalStyle from "../../theming/GlobalStyle";
import theme from "../../theming/theme";
import "./App.css";
// Components
import AdminPanel from "components/AdminPanel";
import PrivateRoute from "routes/PrivateRoute";
import PublicRoute from "routes/PublicRoute";

function App() {
  const { uiStore, userStore } = useContext(MobXProviderContext);

  useEffect(() => {
    document.documentElement.setAttribute("dir", uiStore.direction);
  }, [uiStore.direction]);

  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={{ ...theme, direction: uiStore.direction }}>
          <>
            <GlobalStyle whiteColor />
            <AdminPanel />
            {userStore.userIsLogged ? <PrivateRoute /> : <PublicRoute />}
          </>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default observer(App);
