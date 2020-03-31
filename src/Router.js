import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Authentication from "./pages/Authentication.js";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { UserContext } from "./components/common/UserProvider";

const Router = ({ children }) => {
  const { authenticated } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authenticated ? Home : Authentication} />


        <Route exact path="/:username" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

