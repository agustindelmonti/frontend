import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Icon aria-label="Home" href="/">
      <svg viewBox="0 0 20 20">
        <g>
          <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
        </g>
      </svg>
    </Icon>
  );
};
export default Logo;

const Icon = styled.a`
  align-items: center;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
  flex-direction: row;
  color: inherit;
  text-decoration: inherit;

  svg {
    height: 32px;
    padding: 8px 8px 8px 0;
    width: 32px;
  }
`;
