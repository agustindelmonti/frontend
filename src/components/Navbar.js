import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchBox from "./searchBox";
import Logo from "./Logo";

const Navbar = () => (
  <Header>
    <Wrapper>
      <Navigation>
        <Logo />
        <SearchBox />
        <Link to={"/home"} className="link">
          Home
        </Link>

        <Link to={"/"} className="link">
          Home
        </Link>

        <Link to={"/"} className="link">
          Home
        </Link>
      </Navigation>

      <Actions>AA</Actions>
    </Wrapper>
  </Header>
);
export default Navbar;

const Header = styled.div`
  -ms-flex-align: center;
  align-items: center;
  display: -ms-inline-flexbox;
  display: inline-flex;
  box-sizing: border-box;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-positive: 1;
  flex-grow: 1;

  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 80;
  margin: 0;
  height: 48px;

  && {
    background: rgb(240, 240, 240);
  }
`;

const Wrapper = styled.div`
  -ms-flex-align: center;
  align-items: center;
  display: -ms-inline-flexbox;
  display: inline-flex;
  background-color: var(--newCommunityTheme-body);
  border-bottom: 1px solid var(--newCommunityTheme-line);
  box-sizing: border-box;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0 20px;
`;

const Navigation = styled.nav`
  align-items: center;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-positive: 1;
  flex-grow: 1;

  /*
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
  */
  .link {
    color: black;
    text-decoration: none;
  }
`;

const Actions = styled.div`
  -ms-flex-align: center;
  align-items: center;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-positive: 0;
  flex-grow: 0;
`;
