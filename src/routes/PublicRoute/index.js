// Core
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// Components
import TemplateEnter from "../../templates/TemplateEnter";
import EnterSignUpForm from "../../components/EnterSignUpForm";
import EnterSignInForm from "../../components/EnterSignInForm";
import KYCForm from "../../components/KYCForm";

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
          <KYCForm />
        </Route>
        <Redirect to="/sign-up" />
      </Switch>
    </TemplateEnter>
  );
};

export default PublicRoute;
