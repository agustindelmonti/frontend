import React from "react";
import styled from "styled-components";

import UserProvider from "./UserProvider";
import Navbar from "./Navbar";
import Footer from "./footer";
import Router from "../Router";

const Layout = () => (
  <Body>
    <UserProvider>
      <Router />
    </UserProvider>
  </Body>
);

const Body = styled.div`
  background-color: white;
  background-size: cover;
  font-family: "Proxima Nova", sans-serif;
  color: black;
  height: -webkit-fill-available;
  margin-top: 48px;
`;

export default Layout;
