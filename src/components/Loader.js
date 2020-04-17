import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
  &,
  &:before,
  &:after {
    background: ${theme.primary};
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  color: ${theme.primary};
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: "";
  }

  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

const Loader = () => {
  return <Container>Caricamento...</Container>;
};

export default Loader;