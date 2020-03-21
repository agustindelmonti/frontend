import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Registration from "./pages/Register.js";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import PrivateRouter from "./components/PrivateRouter";
import { UserContext } from "./components/UserProvider";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Router = ({ children }) => {
  const { authenticated } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />

        <PrivateRouter />
        <Route exact path="/:username" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

