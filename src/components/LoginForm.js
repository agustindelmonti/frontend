import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';



export default function LoginForm(){

    return(
        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string()
                .required('Required'),
                password: Yup.string()
                .required('Required'),
            })}
            onSubmit={values => console.log(values)}
            >
            <StyledForm>
                <InputContainer>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledField name="email" type="text" />
                    <StyledErrorMessage name="email" />
                </InputContainer>
                <InputContainer>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledField name="password" type="password" />
                    <StyledErrorMessage name="password" />
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
`;

const StyledErrorMessage = styled(ErrorMessage)`
    color: red !important;
`;
          
const StyledButton = styled.button`
    width: 100%;
    border: 2px;
    margin-top: 5vh;
`;
          
