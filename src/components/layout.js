import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <Body>
    <BrowserRouter>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </BrowserRouter>
  </Body>
);

const Body = styled.div`
  background-color: white;
  background-size: cover;
  font-family: "Proxima Nova", sans-serif;
  color: black;
  height: -webkit-fill-available;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledMain = styled.main`
  margin: 0 40%;
`;

export default Layout;
