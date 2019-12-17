import React, { useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

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

  if (!userData.name) {
    return <h1>{userData.message}</h1>;
  }

  return (
    <React.Fragment>
      <h1> hola {userData.name} </h1>
      <Link to={`${url}/followed`}>Seguidos</Link>
      <Link to={`${url}/followers`}>Seguidores</Link>
    </React.Fragment>
  );
};

export default Profile;
