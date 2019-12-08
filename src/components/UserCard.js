import React from "react";
import styled from "styled-components";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <h4>{this.props.data.id}</h4>
        <h4>{this.props.data.username}</h4>
        <img src={this.props.data.profilePicture}></img>
      </Card>
    );
  }
}
export default UserCard;

//Styled Components
const Card = styled.div`
  background: orange;
  margin: 10px;
  padding: 10px;
  list-style: none;
`;
