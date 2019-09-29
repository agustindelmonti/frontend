import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../components/button";
import Layout from "../components/layout";
import InputWrapper from "../components/InputWrapper";
import Divider from "../components/divider";

//Yup validation rules of forms fields datatypes
const validationSchema = Yup.object().shape({
  email: Yup.string().required(
    "Ingresa tu nombre de usuario o tu dirección de correo electrónico."
  ),
  password: Yup.string().required("Por favor introduce tu contraseña.")
});

const initialValues = {
  email: "",
  password: ""
};

export default function Login() {
  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          //Aca se programa la logica de fetch
          alert(JSON.stringify(values, null, 2));
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

            <InputWrapper touched={touched.email} message={errors.email}>
              <InputField
                type="text"
                name="email"
                id="email"
                placeholder="Email o nombre de usuario"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
            </InputWrapper>
            <InputWrapper touched={touched.password} message={errors.password}>
              <InputField
                type="text"
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
    </Layout>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;

  width: 400px;
  margin: 10% 0%;
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
