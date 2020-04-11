// Core
import React from "react";
import { observer } from "mobx-react";
import { Route } from "react-router-dom";

//Instruments

// Components
import TemplateBase from "../../templates/TemplateBase";
import HomeScreen from "../../components/Screens/HomeScreen";

const PrivateRoute = () => {
  return (
    <TemplateBase>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/2" render={() => <h1>Portfolio Details</h1>} />
      <Route exact path="/3" render={() => <h1>Performance</h1>} />
      <Route exact path="/4" render={() => <h1>Transactions</h1>} />
      <Route exact path="/5" render={() => <h1>Settings</h1>} />
      <Route exact path="/6" render={() => <h1>Turn Off</h1>} />
    </TemplateBase>
  );
};

export default observer(PrivateRoute);
