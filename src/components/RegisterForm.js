import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';


export default function RegisterForm(){
    return (
        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
                matchingPassword: Yup.string()
                    .required('Required'),
            })}
            onSubmit={values => console.log(values)}
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
                <StyledButton type="submit" className="btn btn-light">Register</StyledButton>
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
    margin-top: 8vh;
    margin-bottom: 5vh;
`;