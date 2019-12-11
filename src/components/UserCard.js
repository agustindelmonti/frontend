import React from "react";
import styled from "styled-components";

import "tabler-react/dist/Tabler.css";
import { Avatar, colors } from "tabler-react";

const UserCard = props => {
  const { id, username, profilePicture } = props.data;

  const generateRandomColor = () => {
    var keys = Object.keys(colors);
    return keys[Math.floor(keys.length * Math.random())];
  };

  return (
    <Card>
      {profilePicture ? (
        <Avatar src={profilePicture} />
      ) : (
        <Avatar color={generateRandomColor()}>
          {username.substring(0, 3)}
        </Avatar>
      )}
      <h4>{username}</h4>
    </Card>
  );
};
export default UserCard;

const Card = styled.div`
  display: flex;
  flex-direction: row;

  margin: 5px 0px;
`;
