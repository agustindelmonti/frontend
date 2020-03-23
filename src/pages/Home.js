import React from "react";
import styled, { keyframes } from "styled-components";
import LoginForm from "../components/LoginForm";
import RegisterBar from "../components/RegisterBar";

export default function Home() {
  
  return (
    <MainRow className="row no-gutters justify-content-center">
      <MainColumn className="col-4 d-flex flex-column justify-content-center align-items-center">
        <FormContainer className="d-flex">
          <LoginFormContainer className="d-flex flex-column align-items-left">
            <FormTitle>Login</FormTitle>
            <LoginForm/>
          </LoginFormContainer>
          <RegisterBar/>
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
  padding-left: 3vw ;
  border-radius: 8px;
`;

const LoginFormContainer = styled.div`
  width: 90%;
  margin-bottom: 8vh;
`;

const FormTitle = styled.h1`
  color: #4284f4;
  font-size: 2.3rem;
  margin-top: 6vh;
  margin-bottom: 0;
`;
