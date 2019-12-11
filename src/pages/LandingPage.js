import React from "react";
import { Switch, Route } from "react-router-dom";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Profile from "./Profile";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Home" />
        <Switch>
          <Route path="/:username" component={Profile} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default LandingPage;
