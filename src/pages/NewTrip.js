import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const API_URL = "http://localhost:8080";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .max(20, "Debe ser menor a 20 caracteres.")
    .required("Campo obligatorio"),
  description: Yup.string()
    .max(500, "La contraseña debe tener menos de 32 caracteres")
    .required("Campo obligatorio")
});

const initialValues = {
  title: "",
  description: "",
  departureDate: "",
  endDate: "",
  accessibility: true
};

const NewTrip = () => {
  const submitForm = (values, { setSubmitting }) => {
    fetch(`${API_URL}/api/v1/trips`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values),
      credentials: "include"
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .finally(setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="title">Titulo</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />

          <label htmlFor="description">Descripcion</label>
          <Field name="description" component="textarea" rows={4} />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="departureDate">Desde</label>
          <Field type="date" name="departureDate" />
          <ErrorMessage name="departureDate" component="div" />

          <label htmlFor="endDate">Hasta</label>
          <Field type="date" name="endDate" />
          <ErrorMessage name="endDate" component="div" />

          <h5>Acceso</h5>
          <Field type="checkbox" name="accessibility" />
          <ErrorMessage name="accessibility" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewTrip;
