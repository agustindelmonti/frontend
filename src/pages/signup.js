import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../components/errors.jsx";
import "styles.scss";

//Validations with Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Direccion de email invalida.")
    .max(255, "Debe ser menor a 255 caracteres.")
    .required("Campo obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(32, "La contraseña debe tener menos de 32 caracteres")

    .required(),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden.")
    .required(),
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
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form>
          {(JSON.stringify(values), JSON.stringify(errors))}
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
            <href>Términos y Condiciones de Uso </href>.
          </div>

          <div className="input-row">
            <button type="submit">Regístrate</button>
          </div>

          <div>
            ¿Ya tienes una cuenta?
            <href>Iniciar sesión </href>.
          </div>
        </form>
      )}
    </Formik>
  );
}
