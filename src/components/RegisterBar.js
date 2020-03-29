import React, { useState, useRef } from "react";
import styled from "styled-components";
import { css } from 'glamor'


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
            {!hover &&  !expanded ? <ExpandArrow className="fas fa-angle-double-left fa-2x mx-auto"/> : null }
        </VerticalDisplay>
    );
}



const VerticalDisplay = styled.div`
  width: 7%;
  height: 100%;
  background-color: #4284f4;
  padding-top: 3vh;

  transition: width 0.3s;
`;

const ExpandArrow = styled.i`
  color: #689cf6;
`;
