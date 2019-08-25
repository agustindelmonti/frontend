import React from "react";

const Error = ({ touched, message }) => {
  if (touched && message) {
    return <a className="invalid-input">{message}</a>;
  }
  return <a className="valid-input" />;
};

export default Error;
