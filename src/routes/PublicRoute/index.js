// Core
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// Components
import EnterHeader from "../../components/EnterHeader";

const PublicRoute = () => {
  return (
    <>
      <EnterHeader />
      <Switch>
        <Route path="/sign-up">
          <Home />
        </Route>
        <Route path="/sign-in">
          <About />
        </Route>
        <Route path="/kyc">
          <Users />
        </Route>
        <Redirect to="/sign-up" />
      </Switch>
    </>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default PublicRoute;
