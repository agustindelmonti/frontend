import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <StyledText>Derechos reservados {new Date().getFullYear()}</StyledText>
    </FooterContent>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  margin: 0;
  background: #000000;
  width: 100%;
  position: relative;
  bottom: 0;
`;

const FooterContent = styled.div`
  padding: 1% 3%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

const StyledText = styled.span`
  color: #ffff;
  font-weight: bold;
`;

export default Footer;
