import React, { useContext } from "react";

import { UserContext } from "./components/common/UserProvider";
import { Route, Redirect } from "react-router-dom";


export default function PrivateRouter({ children, ...rest }) {
  const { authenticated } = useContext(UserContext);


  return(
    <Route {...rest} 
      render={ () => authenticated ? children : <Redirect to="/"/> }
    />
  );
}
