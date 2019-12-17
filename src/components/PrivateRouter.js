import React, {useContext} from "react";

import {UserContext} from "./UserProvider";
import Trip from "../pages/trip";
import {Switch, Route, Redirect} from "react-router-dom";

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
            </Switch>
        );
    }
}