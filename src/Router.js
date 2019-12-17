import React, {useContext} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Registration from "./pages/Register.js";

import Profile from "./pages/Profile";

import PrivateRouter from "./components/PrivateRouter";
import Login from "./pages/Login";
import {UserContext} from "./components/UserProvider";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./pages/Home";

const Router = ({children}) => {
    const { authenticated } = useContext(UserContext);

    return(
        <BrowserRouter>
            <Navbar/>
            <StyledMain>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Registration/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <PrivateRouter/>
                </Switch>
            </StyledMain>
        </BrowserRouter>
    );
};

export default Router;


const StyledMain = styled.main`
  margin: 0 40%;
`;