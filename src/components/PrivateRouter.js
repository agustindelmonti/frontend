import React, {useContext} from "react";

import {UserContext} from "./UserProvider";
import Trip from "../pages/trip";
import {Switch, Route, Redirect} from "react-router-dom";
import Profile from "../pages/Profile";
import FollowList from "./FollowerList";

export default function PrivateRouter(props){
    const { authenticated } = useContext(UserContext);

    if(!authenticated){
        return <Redirect to="/login"/>
    }
    else{
        return (
            <Switch>
                <Route exact path="/trip">
                    <Trip/>
                </Route>
                <Route exact path="/:username/profile">
                    <Profile {...props}/>
                </Route>
                <Route exact path="/:username/followed">
                    <FollowList/>
                </Route>
            </Switch>
        );
    }
}