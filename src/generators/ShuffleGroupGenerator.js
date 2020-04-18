import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card, Filters, Header, Title } from "../components/Card";
import Checkbox from "../components/Checkbox";
import Counter from "../components/Counter";
import List from "../components/List";
import { shuffle } from "../utils";

const genericGetItems = (array, selected) => {
  return array
    .map((e) => ({ ...e, items: shuffle(e.items) }))
    .filter((_, i) => selected[i].include)
    .map(({ items }) => items)
    .flat();
};

const ShuffleGroupGenerator = ({
  array,
  title,
  min = 1,
  max = 10,
  start = 5,
  getItems = genericGetItems,
}) => {
  const [number, setNumber] = useState(start);
  const counterParams = {
    min: min < 1 ? 1 : min,
    max: max < 1 ? 10 : max,
  };

  const [selected, setSelected] = useState(
    array.map(({ name }) => ({ name, include: true }))
  );

  const [shuffled, setShuffled] = useState(getItems(array, selected));

  useEffect(() => {
    setShuffled(getItems(array, selected));
  }, [getItems, array, selected]);

  const reshuffle = () => setShuffled(getItems(array, selected));

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <Filters>
          <Counter {...counterParams} number={number} onChange={setNumber} />
          <div>
            {selected.map(({ name, include }, index) => (
              <Checkbox
                key={name}
                disabled={
                  include &&
                  selected.filter(({ include }) => !!include).length === 1
                }
                checked={include}
                onChange={(e) => {
                  const copy = [...selected];
                  copy[index].include = e.target.checked;
                  setSelected(copy);
                }}
              >
                {name}
              </Checkbox>
            ))}
          </div>
        </Filters>
      </Header>

      <List array={shuffled.slice(0, number)}>
        <Button onClick={reshuffle}>Ripeti</Button>
      </List>
    </Card>
  );
};

export default ShuffleGroupGenerator;
