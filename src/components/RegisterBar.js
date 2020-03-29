import React, { useState, useRef } from "react";
import styled from "styled-components";
import { css } from 'glamor'

import RegisterForm from './RegisterForm';


export default function RegisterBar(props){
    const [hover, setHover] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const verticalDisplayRef = useRef(null);


    function handleMouseEnterOrLeave(){
        setHover(!hover);
        verticalDisplayRef.current.classList.toggle(hoverTransition);
    }

    function handleClick(){
      if(!expanded){
        props.hideLogin();
        setExpanded(!expanded);
        verticalDisplayRef.current.classList.toggle(expandTransition);
      }
    }


    const hoverTransition = css({
      width: "10%"
    });

    const expandTransition = css({
      width: "100%"
    });

    return(
        <VerticalDisplay className="ml-auto" onMouseEnter={handleMouseEnterOrLeave} 
        onMouseLeave={handleMouseEnterOrLeave} onClick={handleClick} ref={verticalDisplayRef}>
            { expanded ? 
              <RegisterFormContainer>
                <FormTitle>Register</FormTitle>
                <RegisterForm></RegisterForm>
              </RegisterFormContainer>
            : !expanded && !hover ? 
              <ExpandArrow className="fas fa-angle-double-left fa-2x mx-auto"/> 
            : null 
            }
        </VerticalDisplay>
    );
}


const VerticalDisplay = styled.div`
  width: 7%;
  height: 100%;
  background-color: #4284f4;
  overflow: hidden;

  transition: width 0.3s ease;
`;

const ExpandArrow = styled.i`
  margin-top: 3vh;
  color: #689cf6;
`;


const RegisterFormContainer = styled.div`
  margin-left: 3vw;
`;


const FormTitle = styled.h1`
  color: #fefefe;
  font-size: 2.3rem;
  margin-top: 6vh;
  margin-bottom: 0;
`;


