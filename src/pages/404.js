import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundWrapper>
      <h1>NOT FOUND</h1>
      <p>Parece ser que lo que andabas buscando no existe.</p>
      <img src={require("../assets/404.png")} alt="Null" />
    </NotFoundWrapper>
  </Layout>
);

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  margin: 20%;
  img {
    width: 15rem;
  }
  h1 {
    font-weight: bold;
  }
`;

export default NotFoundPage;
