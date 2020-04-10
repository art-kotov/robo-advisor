// Core
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// Components
import TemplateEnter from "../../templates/TemplateEnter";
import EnterSignUpForm from "../../components/EnterSignUpForm";
import EnterSignInForm from "../../components/EnterSignInForm";

const PublicRoute = () => {
  return (
    <TemplateEnter>
      <Switch>
        <Route path="/sign-up">
          <EnterSignUpForm />
        </Route>
        <Route path="/sign-in">
          <EnterSignInForm />
        </Route>
        <Route path="/survey">
          <Users />
        </Route>
        <Redirect to="/sign-up" />
      </Switch>
    </TemplateEnter>
  );
};

function Users() {
  return <h2>Users</h2>;
}
export default PublicRoute;
