import React from "react";
import styled from "styled-components";

import "tabler-react/dist/Tabler.css";
import { Avatar, colors } from "tabler-react";

const API_URL = "http://localhost:8080";

const UserCard = props => {
  const { id, username, profilePicture } = props.data;
  const [followed, setFollowed] = React.useState(props.data.followed);

  const followUser = () => {
    fetch(`${API_URL}/user/follow/${username}`, {
      method: "PUT",
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

      <button onClick={followUser}>{followed ? "Siguiendo" : "Seguir"}</button>
    </Card>
  );
};
export default UserCard;

const Card = styled.div`
  display: flex;
  flex-direction: row;

  margin: 5px 0px;
`;
