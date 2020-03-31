import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/authentication/LoginForm";
import RegisterBar from "../components/authentication/RegisterBar";

export default function Authentication() {
  const [hidedLogin, setHidedLogin] = useState(false);

  function toggleHideLogin(){
    setHidedLogin(!hidedLogin);
  }


  return (
    <MainRow className="row no-gutters justify-content-center">
      <MainColumn className="col-4 d-flex flex-column justify-content-center align-items-center">
        <FormContainer className="d-flex align-items-center">
          {!hidedLogin ? 
            <LoginFormContainer className="d-flex flex-column align-items-left">
              <FormTitle>Login</FormTitle>
              <LoginForm/>
            </LoginFormContainer>
            : null
          }
          <RegisterBar toggleHideLogin={toggleHideLogin}/>
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
  min-height: 54%;
  background-color: #fefefe;
  padding-left: 8%;
  border-radius: 8px;
`;

const LoginFormContainer = styled.div`
  width: 90%;
`;

const FormTitle = styled.h1`
  color: #4284f4;
  font-size: 2.3rem;
  margin-top: 6vh;
  margin-bottom: 0;
`;
