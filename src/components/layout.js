import React from "react";
import styled from "styled-components";

import UserProvider from "./UserProvider";
import Navbar from "./Navbar";
import Footer from "./footer";
import Router from "../Router";

const Layout = () => (
  <UserProvider>
      <Router />
  </UserProvider>
);

export default Layout;
