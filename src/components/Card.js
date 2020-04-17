import styled from "styled-components";

export const Card = styled.article`
  > * + * {
    margin-top: 0.5rem;
  }

  display: inline-flex;
  flex-direction: column;
`;

export const Header = styled.div`
  min-height: 7rem;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > * + * {
    margin-top: 0.5rem;
  }
`;
