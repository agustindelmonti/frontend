import React, { useState } from "react";
import {
  Link,
  useParams,
  useRouteMatch,
  BrowserRouter,
  Route
} from "react-router-dom";

import SEO from "../components/seo";
import FollowList from "../components/FollowerList";

const API_URL = "http://localhost:8080";

const Profile = () => {
  const { username } = useParams();
  let { path, url } = useRouteMatch();
  const [userData, setUserData] = useState("");

  if (!userData) {
    fetch(API_URL + "/" + username + "/profile", {
      method: "GET",
      headers: { "Accept-Type": "application/json" }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        setUserData(jsonResponse);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <h1> hola {userData.name} </h1>
        <Link to={`${url}/followed`}>Seguidos</Link>
        <Link to={`${url}/followers`}>Seguidores</Link>

        <Route exact path="/:username/followed" component={FollowList} />
        <Route exact path="/:username/followers" component={FollowList} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Profile;
