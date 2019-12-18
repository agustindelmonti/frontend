import React, {useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../components/button";
import Layout from "../components/layout";
import InputWrapper from "../components/InputWrapper";
import Divider from "../components/divider";

//import "../styles/styles.scss";


const API_URL = "http://localhost:8080";

//Yup validation rules of forms fields datatypes
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Direccion de email invalida.")
    .max(255, "Debe ser menor a 255 caracteres.")
    .required("Campo obligatorio"),
  password: Yup.string()
    .max(32, "La contraseña debe tener menos de 32 caracteres")
    .required("Campo obligatorio"),
    //.matches(
    //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%?\^&\*])(?=.{8,})/,
    //  "Debe tener al menos 8 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 numero y un caracter especial."
    //),
  matchingPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden.")
    .required("Campo obligatorio"),
  username: Yup.string()
    .min(5, "Usuario debe tener al menos 5 caracteres")
    .max(30, "Usuario demasiado grande.")
    .required("Campo obligatorio")
});

const initialValues = {
  email: "",
  password: "",
  matchingPassword: "",
  username: ""
};

//Sign Up Form
export default function Registration() {
  const [resultMessage, setResultMessage] = useState("");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={ values  => {
        fetch(`${API_URL}/register`, {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        }).then(response => {
          if(response.status === 201){
              setResultMessage("Cuenta registrada, por favor revise si casilla de correo para verificar el email");
          }
          else if (response.status === 409){
            return response.json().then(jsonResponse => setResultMessage(jsonResponse.message))
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
          <h4>Regístrate con tu dirección de email</h4>

          <InputWrapper touched={touched.email} message={errors.email}>
            <InputField
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
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

          <InputWrapper
            touched={touched.password_confirm}
            message={errors.password_confirm}
          >
            <InputField
              type="password"
              name="matchingPassword"
              id="matchingPassword"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password_confirm}
              error={touched.password_confirm && errors.password_confirm}
            />
          </InputWrapper>

          <InputWrapper touched={touched.username} message={errors.username}>
            <InputField
              type="text"
              name="username"
              id="username"
              placeholder="Usuario"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && errors.username}
            />
          </InputWrapper>

          <div>
            Al hacer clic en Registrarse, acepta los
            <Link to={"/"}>Términos y Condiciones de Uso </Link>.
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Regístrate
          </Button>
          <p>{resultMessage}</p>

          <div>
            ¿Ya tienes una cuenta?
            <Link to={"/login"}>Iniciar sesión </Link>.
          </div>
        </StyledForm>
      )}
    </Formik>
  );
}

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
