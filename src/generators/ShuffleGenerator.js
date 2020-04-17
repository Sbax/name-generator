import React, { useState } from "react";
import { Button } from "../components/Button";
import { Card, Title, Filters, Header } from "../components/Card";
import Counter from "../components/Counter";
import List from "../components/List";
import { shuffle } from "../utils";

const ShuffleGenerator = ({ array, title, min = 1, max = 10, start = 5 }) => {
  const counterParams = {
    min: min < 1 ? 1 : min,
    max: max < 1 ? 10 : max,
  };

  const [number, setNumber] = useState(start);
  const [shuffled, setShuffled] = useState(shuffle(array));

  const reshuffle = () => setShuffled(shuffle(array));

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <Filters>
          <Counter {...counterParams} number={number} onChange={setNumber} />
        </Filters>
      </Header>

      <List array={shuffled.slice(0, number)}>
        <Button onClick={reshuffle}>Ripeti</Button>
      </List>
    </Card>
  );
};

export default ShuffleGenerator;
