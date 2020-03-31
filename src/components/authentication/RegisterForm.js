import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';
import axios from 'axios';
import { UserContext } from "../common/UserProvider";


const API_REGISTER_URL = `${process.env.REACT_APP_API_URL}/register`;


export default function RegisterForm(){
    const { handleLogin } = useContext(UserContext);
    const [ failedRegisterMessage, setFailedRegisterMessage ] = useState(null);

    function submitRegisterForm(values){
        axios.post(API_REGISTER_URL, {
            username: values.username,
            email: values.email,
            password: values.password,
            matchingPassword: values.matchingPassword
          })
          .then(function (response) {
            if(response.status === 201) {
                handleLogin();
            }
          })
          .catch(function (error) {
            if(typeof variable !== 'undefined' && error.response.status === 409){
                setFailedRegisterMessage(error.response.data.message);
            }
            else{
                setFailedRegisterMessage("Something went wrong");
                console.log(error.response);
            }
        });
    }


    return (
        <Formik
            initialValues={{ username: '', email: '', password: '', matchingPassword: ''}}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .required('Required')
                    .email("Invalid email"),
                password: Yup.string()
                    .required('Required'),
                matchingPassword: Yup.string()
                    .required('Required')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            })}
            onSubmit={values => submitRegisterForm(values)}
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
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledField name="email" type="text" />
                    <ErrorMessage name="email" component={StyledErrorMessage}/>
                </InputContainer>
                <InputContainer>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledField name="password" type="password" />
                    <ErrorMessage name="password" component={StyledErrorMessage}/>
                </InputContainer>
                <InputContainer>
                    <StyledLabel htmlFor="matchingPassword">Confirm Password</StyledLabel>
                    <StyledField name="matchingPassword" type="password" />
                    <ErrorMessage name="matchingPassword" component={StyledErrorMessage}/>
                </InputContainer>
                <StyledButton type="submit" className="btn btn-light" failedRegisterMessage={failedRegisterMessage}>Register</StyledButton>
                {failedRegisterMessage ? <FailedRegisterMessage>{failedRegisterMessage}</FailedRegisterMessage> : null}
            </StyledForm>
        </Formik>
    );
}


const StyledForm = styled(Form)`
    width: 90%;
`;


const InputContainer = styled.div`
    margin-top: 3vh;
`;


const StyledLabel = styled.label`
    color: #fefefe;
    display: block;
    font-size: 1rem;
`;

const StyledField = styled(Field)`
    width: 100%;
    background-color: #e5e4e4;
    border: none;
    border-radius: 2px;
    outline: none;
    line-height: 2rem;
    font-size: 1rem;
    padding: 0 0.7vw;
`;

const StyledErrorMessage = styled.div`
    margin-top: 1vh;
    font-size: .9rem;
    color: #ffed00d1;
    font-weight: 500;
`;
          
const StyledButton = styled.button`
    width: 100%;
    color: #4284f4 !important;
    border: 2px;
    margin-top: 6vh;
    margin-bottom: 5vh;
`;

const FailedRegisterMessage = styled.p`
    font-size: .9rem;
    color: #ffed00d1;
    font-weight: 500;
    text-align: center;
    margin-bottom: 3vh;
`;