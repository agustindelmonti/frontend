import React, {useContext, useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import Button from "../components/button";
import Layout from "../components/layout";
import InputWrapper from "../components/InputWrapper";
import Divider from "../components/divider";
import withUser from "../components/withUser";
import {UserContext} from "../components/UserProvider";

const API_URL = "http://localhost:8080";

//Yup validation rules of forms fields datatypes
const validationSchema = Yup.object().shape({
  username: Yup.string().required(
    "Ingresa tu nombre de usuario o tu dirección de correo electrónico."
  ),
  password: Yup.string().required("Por favor introduce tu contraseña.")
});

const initialValues = {
  username: "",
  password: ""
};

const Login = () => {
  const { authenticated , actions } = useContext(UserContext);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  if (authenticated){
      return <Redirect to="/"/>
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        fetch(`${API_URL}/auth`, {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        }).then(response => {
              if(response.status === 200){
                  actions.onLogin(response);
              }
              else{
                  setInvalidCredentials(true);
              }
        }).catch(error => {
            console.log(error);
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Divider />
          <h4>Para continuar, inicia sesión.</h4>

          <InputWrapper touched={touched.username} message={errors.username}>
            <InputField
              type="text"
              name="username"
              id="username"
              placeholder="Email o nombre de usuario"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && errors.username}
            />
          </InputWrapper>
          <InputWrapper touched={touched.password} message={errors.password}>
            <InputField
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
            />
          </InputWrapper>
          <div className="input-row">
            <Button type="submit" disabled={isSubmitting}>
              Iniciar Sesion
            </Button>
          </div>

          {invalidCredentials && <p>Usuario y/o contraseña equivocado</p>}

          <Link to={"/"}>¿Has olvidado tu contraseña?</Link>

          <div>
            <Divider />
            <h2>¿No tienes una cuenta?</h2>
            <Link to={"/register"}>Regístrte</Link>.
          </div>

          <div>
            <Divider />
            Al hacer clic en Registrarse, acepta los
            <Link to={"/"}> Términos y Condiciones de Uso </Link>.
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};
export default withUser(Login);


const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;

  width: 400px;
  padding: 3%;
`;

const InputField = styled.input`
  float: left;
  font-size: 13px;
  height: 33px;
  margin: 0;
  padding: 0 0 0 15px;
  width: 100%;
  outline: none;

  /*Change bg color if there is an error */
  background-color: ${props => (props.error ? "#fce4e4" : "#fff")};
  /*Change border color if there is an error */
  border: 1px solid ${props => (props.error ? "#cc0033" : "#999")};
`;
