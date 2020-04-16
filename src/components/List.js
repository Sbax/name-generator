import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  background: ${theme.primary};

  ul {
    flex: 1;
    width: 100%;

    & + * {
      margin-top: 1rem;
    }
  }
`;

const List = ({ array, children }) => {
  return (
    <Container>
      <ul>
        {array.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
      {children}
    </Container>
  );
};

export default List;
