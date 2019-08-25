import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../components/errors.jsx";
import "./styles.scss";

//Field Yup validation definitions
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Direccion de email invalida.")
    .max(255, "Debe ser menor a 255 caracteres.")
    .required("Campo obligatorio"),
  password: Yup.string()
    .max(32, "La contraseña debe tener menos de 32 caracteres")
    .required("Campo obligatorio")
    .matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
      "Debe tener al menos 8 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 numero y un caracter especial."
    ),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden.")
    .required("Campo obligatorio"),
  username: Yup.string()
    .min(5, "Usuario debe tener al menos 5 caracteres")
    .max(30, "Usuario demasiado grande.")
    .required("Campo obligatorio")
});

export default function SignUp() {
  const initialValues = {
    email: "",
    password: "",
    password_confirm: "",
    username: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

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
        <form onSubmit={handleSubmit}>
          <h1>Regístrate con tu dirección de email</h1>

          <div className="input-row">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "invalid-input" : null}
            />
            <Error touched={touched.email} message={errors.email} />
          </div>

          <div className="input-row">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={
                touched.password && errors.password ? "invalid-input" : null
              }
            />
            <Error touched={touched.password} message={errors.password} />
          </div>

          <div className="input-row">
            <label htmlFor="password_confirm">Confirmar contraseña</label>
            <input
              type="password"
              name="password_confirm"
              id="password_confirm"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password_confirm}
              className={
                touched.password_confirm && errors.password_confirm
                  ? "invalid-input"
                  : null
              }
            />
            <Error
              touched={touched.password_confirm}
              message={errors.password_confirm}
            />
          </div>

          <div className="input-row">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usuario"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              className={
                touched.username && errors.username ? "invalid-input" : null
              }
            />
            <Error touched={touched.username} message={errors.username} />
          </div>

          <div>
            Al hacer clic en Registrarse, acepta los
            <a href="">Términos y Condiciones de Uso </a>.
          </div>

          <div className="input-row">
            <button type="submit" disabled={isSubmitting}>
              Regístrate
            </button>
          </div>

          <div>
            ¿Ya tienes una cuenta?
            <a href="">Iniciar sesión </a>.
          </div>
        </form>
      )}
    </Formik>
  );
}
