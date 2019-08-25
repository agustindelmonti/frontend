import React from "react";

const Error = ({ touched, message }) => {
  if (touched && message) {
    return <div className="error-message">{message}</div>;
  }
  return <div className="valid-input"> </div>;
};

export default Error;
