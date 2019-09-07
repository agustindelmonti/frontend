import React from "react";
import styled from "styled-components";

import Header from "../components/header";

const Layout = ({ children }) => (
  <Body>
    <Header />
    <StyledMain>{children}</StyledMain>
  </Body>
);

const Body = styled.div`
  background-color: white;
  background-size: cover;
  font-family: "Proxima Nova", sans-serif;
  color: white;
  height: -webkit-fill-available;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledMain = styled.main`
  margin: 0 2%;
`;

export default Layout;
