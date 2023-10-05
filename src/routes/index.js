import React from "react";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">

          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default Routes;
