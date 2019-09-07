import React from "react";
import styled from "styled-components";

import SearchBox from "./searchBox";

const Header = () => (
  <HeaderWrapper>
    <SearchBox />
    <button className="plus">+</button>
    <img src="../assets/avatar.png" className="avatar" />
    <NavBar>sas</NavBar>
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

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;

export default Header;
