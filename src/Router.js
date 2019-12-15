import React from "react";
import { Switch, Route } from "react-router-dom";

import Registration from "./pages/Register.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile";

const Router = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Registration} />
    <Route path="/:username" component={Profile} />
  </Switch>
);
export default Router;
