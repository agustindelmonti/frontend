import React from "react";
import Error from "../components/errors.jsx";

function validate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Required field";
  }

  return errors;
}

export default function Login() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    setErrors(validate({ name }));
  }, [name]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const newErrors = validate({ name });
        if (Object.keys(newErrors).length > 0) {
          return;
        }

        alert("hOLA");
      }}
    >
      <div className="input-row">
        <label htmlFor="name">Name: </label>

        <input
          className={errors.name ? "invalid-input" : null}
          type="text"
          name="user name"
          id="name"
          onChange={event => {
            setName(event.target.value);
          }}
          value={name}
        />
        <Error message={errors.name} />
      </div>

      <div className="input-row">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={event => {
            setPassword(event.target.value);
          }}
          value={password}
        />
      </div>

      <div className="input-row">
        <button class="btn btn-primary btn-block" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}
