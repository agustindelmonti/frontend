import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <Body>
    <BrowserRouter>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </BrowserRouter>
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

const StyledMain = styled.main`
  margin: 0 40%;
`;

export default Layout;
