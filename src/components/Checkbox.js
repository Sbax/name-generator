import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;

  input {
    display: none;
  }

  span {
    cursor: pointer;
    margin-right: 0.5em;
    border-radius: 0.1em;
    width: 1em;
    height: 1em;
    background: ${theme.accent};

    transition: opacity ease-in-out 250ms;
    opacity: 0.3;

    &:hover {
      opacity: 0.6;
    }

    &:before {
      content: "";
      position: absolute;
      display: none;
      left: 0.33em;
      top: 0.33em;
      width: 0.33em;
      height: 0.66em;
      border: solid ${theme.mainBg};
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  input:checked ~ span {
    opacity: 1;

    &:before {
      display: block;
    }
  }

  input:disabled ~ span {
    opacity: 0.5;
  }
`;

const Checkbox = ({ children, ...params }) => {
  return (
    <Label>
      <input type="checkbox" {...params} />
      <span />
      {children}
    </Label>
  );
};

export default Checkbox;
