import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import SEO from "../components/seo";
import FollowList from "../components/FollowerList";

const Profile = ({ match }) => {
  return (
    <BrowserRouter>
      <SEO title="Profile" />
      <div>
        <Link to={`${match.url}/followed`}>Seguidos</Link>
        <Link to={`${match.url}/followers`}>Seguidores</Link>
      </div>
      <div>
        <Route exact path={`/:username/followed`} component={FollowList} />
        <Route exact path={`/:username/followers`} component={FollowList} />
      </div>
    </BrowserRouter>
  );
};

export default Profile;
