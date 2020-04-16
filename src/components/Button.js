import styled from "styled-components";
import theme from "../theme";

export const Button = styled.button`
  display: inline-block;
  border: 0;
  outline: 0;
  padding: 0.5rem;
  background: ${(props) => props.color || theme.accent};
  color: white;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;

  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;
