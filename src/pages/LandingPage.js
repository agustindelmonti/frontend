import React from "react";

import Router from "../Router";
import SEO from "../components/seo";
import Layout from "../components/layout";

const LandingPage = () => {
  return (
    <React.Fragment>
        <SEO title="Home" />
        <Layout/>
    </React.Fragment>
  );
};

export default LandingPage;
