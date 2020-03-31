import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Authentication from "./pages/Authentication.js";
import Home from "./pages/Home";


import Interests from "./pages/Interests";
import NewTrip from "./pages/NewTrip";
import Profile from "./pages/Profile";
import Trip from "./pages/Trip";
import Error from "./pages/Error";

import { UserContext } from "./components/common/UserProvider";
import PrivateRouter from "./PrivateRouter.js";

const Router = ({ children }) => {
  const { authenticated } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authenticated ? Home : Authentication} />

        <PrivateRouter exact path="/test">
          <Profile/>
        </PrivateRouter>

        <Route path="*" component={Error}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;

