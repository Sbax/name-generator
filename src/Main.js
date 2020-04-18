import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import NamesGenerator from "./generators/NamesGenerator";
import ShuffleGenerator from "./generators/ShuffleGenerator";
import ShuffleGroupGenerator from "./generators/ShuffleGroupGenerator";
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

const Main = ({ names, places, dishes, regions }) => {
  return (
    <Container>
      <Header />
      <Grid>
        <NamesGenerator array={names} title={"Nomi"} />
        <ShuffleGenerator array={places} title={"Luoghi"} start={3} />
        <ShuffleGroupGenerator array={dishes} title={"Menu"} />
        <ShuffleGroupGenerator array={regions} title={"Città"} />
      </Grid>

      <Thanks />
    </Container>
  );
};

export default Main;
