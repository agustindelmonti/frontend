import React from "react";

import { UserContext } from "./UserProvider";
/** Higher order component that suscribes to the session provider
 */

const withUser = ComposedComponent => props => (
  <UserContext.Consumer>
    {user => <ComposedComponent {...props} {...user}></ComposedComponent>}
  </UserContext.Consumer>
);

export default withUser;
