import React from "react";

/** Creates a global context to store the state of the logged user
The value prop of the context provider is passed to any children. 
This context provider must wrap the entire app
 */
export const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const actions = () => ({ onLogin: handleLogin });

  return (
    <UserContext.Provider value={{ authenticated, actions: actions }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
