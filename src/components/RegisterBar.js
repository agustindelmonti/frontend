import React, { useState } from "react";
import styled, { keyframes } from "styled-components";


export default function RegisterBar(){
    const [hover, setHover] = useState(false);
    
    function handleMouseEnterOrLeave(){
        setHover(!hover);
    }


    return(
        <VerticalDisplay className="ml-auto" onMouseEnter={handleMouseEnterOrLeave} 
        onMouseLeave={handleMouseEnterOrLeave}>
            {!hover  ? <ExpandArrow className="fas fa-angle-double-left fa-2x mx-auto"/> : null }
        </VerticalDisplay>
    );
}


const hoverExpand = keyframes`
  from {
    width 7%;
  }

  to {
    width: 10%;
  }
`;

const VerticalDisplay = styled.div`
  width: 7%;
  height: 100%;
  background-color: #4284f4;
  padding-top: 3vh;

  &:hover{
    animation: ${hoverExpand} 0.3s ease both;
  } 
`;

const ExpandArrow = styled.i`
  color: #689cf6;
`;
