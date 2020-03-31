import React from "react";
import styled from "styled-components";
import { css } from 'glamor'

export default function Error(){

  return(
    <div className="row no-gutters justify-content-center"> 
      <div className="col-4 d-flex flex-column justify-content-center" style={{height: "100vh"}}>
        <NotFoundWrapper clasName="d-flex flex-column align-items-center">
          <h1>NOT FOUND</h1>
          <h4>Parece ser que lo que andabas buscando no existe.</h4>
          <img src={require("../assets/404.png")} alt="Null" />
        </NotFoundWrapper>
      </div>
    </div>
  );
};

const NotFoundWrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 3vh;
  }

  h4 {
    text-align: center;
    margin-bottom: 3vh;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 50%;
  }
`;

