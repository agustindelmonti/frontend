import React, { useContext } from "react";

import { UserContext } from "./UserProvider";
import Trip from "../pages/trip";
import { Switch, Route, Redirect } from "react-router-dom";
import FollowList from "./FollowerList";
import NewTrip from "../pages/NewTrip";
import Profile from "../pages/Profile";

export default function PrivateRouter(props) {
  const { authenticated } = useContext(UserContext);

  if (!authenticated) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Switch>
        <Route exact path="/trip/:id" component={Trip} />
        <Route exact path="/new" component={NewTrip} />
        <Route exact path="/:username" component={Profile} />
      </Switch>
    );
  }
}
