import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function SearchBox() {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // cleanup event when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // When user clicks outside of the form, set bar opened to false, to close it
  const handleClick = e => {
    if (formRef.current.contains(e.target)) {
      // click was inside form, do nothing
      return;
    }
    console.log("Click outside the form, close it");
    setBarOpened(false);
  };

  const onFormSubmit = e => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <React.Fragment>
      <Form
        barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Input
          onChange={e => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Buscar"
        />
        <Button type="submit" barOpened={barOpened}>
          icon
        </Button>
      </Form>
    </React.Fragment>
  );
}

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /*Change color depending if it is opened or not */
  background-color: ${props => (props.barOpened ? "#fff" : "#ffffff99")};
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? "26rem" : "13rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};

  border-radius: 0.25rem;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  height: 100%;
  padding: 1px;
  border: none;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;

  width: 100%;
  height: 33px;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: black;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
`;

export default SearchBox;
