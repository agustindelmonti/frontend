import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

export default function Home() {
  
  return (
    <MainRow className="row no-gutters justify-content-center">
      <MainColumn className="col-4 d-flex flex-column justify-content-center">
        <FormContainer className="d-flex flex-column align-items-left">
          <FormTitle>Login</FormTitle>
          <LoginForm/>
        </FormContainer>        
      </MainColumn>
    </MainRow>
  );
}


const MainRow = styled.div`
  background-color: #86dcef;
`;

const MainColumn = styled.div`
  height: 100vh;
`;


const FormContainer = styled.div`
  width: 90%;
  background-color: #fefefe;
  padding: 6vh 4vw;
  border-radius: 8px;
`;

const FormTitle = styled.h1`
  color: #4284f4;
  font-size: 2.3rem;
  margin: 0;
`;
