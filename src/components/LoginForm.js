import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';



export default function LoginForm(){

    return(
        <Formik
            initialValues={{ username: '', password: ''}}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                password: Yup.string()
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
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledField name="password" type="password" />
                    <ErrorMessage name="password" component={StyledErrorMessage}/>
                </InputContainer>
                <StyledButton type="submit" className="btn btn-primary">Log In</StyledButton>
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
    margin-bottom: 8vh;
`;
          
