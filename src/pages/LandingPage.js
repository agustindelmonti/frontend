import React from "react";

import Router from "../Router";
import SEO from "../components/common/Seo";
import UserProvider from "../components/common/UserProvider";

const LandingPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <UserProvider>
        <Router />
      </UserProvider> 
    </React.Fragment>
  );
};

export default LandingPage;
