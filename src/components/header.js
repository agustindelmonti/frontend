import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchBox from "./searchBox";

const Header = () => (
  <HeaderWrapper>
    <NavBar>
      <div className="logo">Logo</div>
      <SearchBox />

      <ul className="nav-links">
        <li>
          <Link to={"/home"} className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>

        <button className="plus">+</button>
        <img src="../assets/avatar.png" className="avatar" />
      </ul>
    </NavBar>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 4px;
  height: 42px;
  display: block;

  && {
    background: linear-gradient(90deg, #8019c6 0%, #2f93cc 100%);
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 35%;

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }

  .link {
    color: white;
    text-decoration: none;
  }
`;

export default Header;
