import React from "react";
import styled from "styled-components";

const InputWrapper = ({ touched, message, children }) => {
  return (
    <Wrapper>
      {children}
      <ErrorMessage error={touched && message}>{message}</ErrorMessage>
    </Wrapper>
  );
};

const ErrorMessage = styled.div`
  color: #cc0033;
  font-size: 12px;
  line-height: 15px;
  margin: 5px;
  height: 3px;

  /*Hide error message if there's no error */
  display: ${props => (props.error ? "inline-block" : "none")};
`;

const Wrapper = styled.div`
  color: #333;
  float: left;
  font-family: inherit;
  font-size: 13px;
  line-height: 20px;
  margin: 0% 2% 0% 2%;

  margin-bottom: 5px;
`;

export default InputWrapper;
