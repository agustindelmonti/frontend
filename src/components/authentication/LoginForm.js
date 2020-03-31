import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';
import axios from "axios";
import { UserContext } from "../common/UserProvider";


const API_LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth`;


export default function LoginForm(){
    const { handleLogin } = useContext(UserContext);
    const [ failedLoginMessage, setFailedLoginMessage ] = useState(null);


    function submitLoginForm(values){
        axios.post(API_LOGIN_URL, {
            username: values.username,
            password: values.password,
          })
          .then(function (response) {
            if(response.status === 200){
                handleLogin();
            }
          })
          .catch(function (error) {
            if(error.response.status === 401){
                setFailedLoginMessage("Wrong Credentials");
            }
            else{
                setFailedLoginMessage("Something went wrong");
                console.log(error.response);
            }
        });
    }


    return(
        <Formik
            initialValues={{ username: '', password: ''}}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
            })}
            onSubmit={values => submitLoginForm(values)}
            validateOnChange={false}
            validateOnBlur={false}
            >
            <StyledForm>
                <InputContainer>
                    <StyledLabel htmlFor="username">Username</StyledLabel>
                    <StyledField name="username" type="text" />
                    <ErrorMessage name="username" component={StyledErrorMessage}/>
                </InputContainer>
                <InputContainer>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledField name="password" type="password" />
                    <ErrorMessage name="password" component={StyledErrorMessage}/>
                </InputContainer>
                <StyledButton type="submit" className="btn btn-primary" failedLoginMessage={failedLoginMessage}>Log In</StyledButton>
                {failedLoginMessage ? <FailLoginMessage>{failedLoginMessage}</FailLoginMessage> : null}
            </StyledForm>
        </Formik>
    );
} 

const StyledForm = styled(Form)`
    width: 90%;
`;


const InputContainer = styled.div`
    margin-top: 4vh;
`;


const StyledLabel = styled.label`
    color: #686883;
    display: block;
    font-size: 1rem;
`;

const StyledField = styled(Field)`
    width: 100%;
    background-color: #e5e4e4;
    border: none;
    outline: none;
    line-height: 2rem;
    font-size: 1rem;
    padding: 0 0.7vw;
`;

const StyledErrorMessage = styled.div`
    margin-top: 1vh;
    font-size: .9rem;
    color: #ff0000d1;
    font-weight: 500;
`;
          
const StyledButton = styled.button`
    width: 100%;
    border: 2px;
    margin-top: 5vh;
    margin-bottom: ${props => props.failedLoginMessage ? "3vh" : "8vh"};
`;
          
const FailLoginMessage = styled.p`
    text-align: center;
    color: #ff0000d1;
    font-weight: 500;
    margin-bottom: 4vh;
`;