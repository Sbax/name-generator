import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 2em;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    font-size: 4em;
  }

  > svg {
    height: 1.5em;
    width: 1.5em;
  }

  > * + * {
    margin-left: 0.25em;
  }

  & + * {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  @media screen and (min-width: 992px) {
    font-size: 1em;
  }

  font-weight: bold;
  letter-spacing: 0.025em;
`;

const Header = () => {
  return (
    <Container>
      <Logo />

      <Title>Lo Generanomi</Title>
    </Container>
  );
};

export default Header;
