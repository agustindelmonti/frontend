import React from "react";
import styled from "styled-components";

const Button = ({ children, background }) => (
  <StyledButton background={background}>{children}</StyledButton>
);

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;

  display: inline-block;
  text-align: center;
  text-decoration: none;

  margin: 2px 0;
  border: solid 1px transparent;
  border-radius: 20px;
  padding: 0.5em 1em;

  color: #ffffff;
  background-color: ${({ background }) => background || "#9555af"};
  outline: none;

  :active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  :hover {
    color: #9050aa;
    border-color: currentColor;
    background-color: white;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5),
      0 0 0 1.5px rgba(255, 105, 180, 0.5);
  }
  .js-focus-visible :focus:not(.focus-visible) {
    box-shadow: none;
  }
  ::-moz-focus-inner {
    border: none;
  }
`;

export default Button;
