import React from "react";
import styled from "styled-components";

import "tabler-react/dist/Tabler.css";
import { Avatar, colors } from "tabler-react";

const API_URL = "http://localhost:8080";

const UserCard = props => {
  const { id, username, profilePicture } = props.data;
  const [followed, setFollowed] = React.useState(props.data.followed);

  const followUser = username => {
    fetch(`${API_URL}/user/follow/${username}`, {
      method: "POST",
      credentials: "include"
    }).then(setFollowed(!followed));
  };

  const unfollowUser = username => {
    fetch(`${API_URL}/user/follow/${username}`, {
      method: "DELETE",
      credentials: "include"
    }).then(setFollowed(!followed));
  };

  return (
    <Card>
      {profilePicture ? (
        <Avatar src={profilePicture} />
      ) : (
        <Avatar color={"blue"}>{username.substring(0, 3)}</Avatar>
      )}

      <h4>{username}</h4>

      {followed ? (
        <button onClick={() => unfollowUser(username)}>Siguiendo</button>
      ) : (
        <button onClick={() => followUser(username)}>Seguir</button>
      )}
    </Card>
  );
};
export default UserCard;

const Card = styled.div`
  display: flex;
  flex-direction: row;

  margin: 5px 0px;
`;
