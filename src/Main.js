import React from "react";
import styled from "styled-components";
import NamesGenerator from "./generators/NamesGenerator";
import ShuffleGenerator from "./generators/ShuffleGenerator";
import Thanks from "./Thanks";

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 30rem;

  > * {
    flex: 1;

    & + * {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    > * + * {
      margin-top: 0;
    }
  }

  grid-gap: 1rem;

  & + * {
    margin-top: 5rem;
  }
`;

const Container = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const Main = ({ femaleNames, maleNames, lastNames, places, dishes }) => {
  return (
    <Container>
      <Grid>
        <NamesGenerator
          femaleNames={femaleNames}
          maleNames={maleNames}
          lastNames={lastNames}
        />
        <ShuffleGenerator array={places} title={"Luoghi"} start={3} />
        <ShuffleGenerator array={dishes} title={"Menu"} start={5} />
      </Grid>

      <Thanks />
    </Container>
  );
};

export default Main;
