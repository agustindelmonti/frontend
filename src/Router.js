import React, {useContext} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Registration from "./pages/Register.js";

import Profile from "./pages/Profile";

import PrivateRouter from "./components/PrivateRouter";
import Login from "./pages/Login";
import {UserContext} from "./components/UserProvider";

const Router = ({children}) => {
    const { authenticated } = useContext(UserContext);
    console.log(authenticated);

    return(
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Registration/>
                </Route>


                <PrivateRouter/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
