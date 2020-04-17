import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card, Title, Filters, Header } from "../components/Card";
import Checkbox from "../components/Checkbox";
import Counter from "../components/Counter";
import List from "../components/List";
import { shuffle } from "../utils";

const min = 1;
const max = 10;

const getNames = ({
  femaleNames,
  maleNames,
  lastNames,
  includeFemales,
  includeMales,
  includeLastNames,
}) => {
  const names = (() => {
    if (!includeFemales && !includeMales) return [];
    if (!includeFemales) return [...maleNames];
    if (!includeMales) return [...femaleNames];
    return [...maleNames, ...femaleNames];
  })();

  const shuffledNames = shuffle(names);

  if (!includeLastNames) return shuffledNames;

  const shuffledLastNames = shuffle(lastNames);
  return Array.from({ length: max }).map((_, index) => {
    const name = shuffledNames[index];
    const lastName = shuffledLastNames[index];

    if (name) return `${name} ${lastName}`;
    return lastName;
  });
};

const NamesGenerator = ({ femaleNames, maleNames, lastNames }) => {
  const [number, setNumber] = useState(5);
  const [includeMales, setMales] = useState(true);
  const [includeFemales, setFemales] = useState(true);
  const [includeLastNames, setLastNames] = useState(true);

  const [shuffled, setShuffled] = useState(
    getNames({
      femaleNames: shuffle(femaleNames),
      maleNames: shuffle(maleNames),
      lastNames: shuffle(lastNames),
      includeFemales,
      includeMales,
      includeLastNames,
    })
  );

  const reshuffle = () =>
    setShuffled(
      getNames({
        femaleNames: shuffle(femaleNames),
        maleNames: shuffle(maleNames),
        lastNames: shuffle(lastNames),
        includeFemales,
        includeMales,
        includeLastNames,
      })
    );

  useEffect(() => {
    setShuffled(
      getNames({
        femaleNames: shuffle(femaleNames),
        maleNames: shuffle(maleNames),
        lastNames: shuffle(lastNames),
        includeFemales,
        includeMales,
        includeLastNames,
      })
    );
  }, [
    femaleNames,
    maleNames,
    lastNames,
    includeMales,
    includeFemales,
    includeLastNames,
  ]);

  return (
    <Card>
      <Header>
        <Title>Nomi</Title>
        <Filters>
          <Counter min={min} max={max} number={number} onChange={setNumber} />
          <div>
            <Checkbox
              disabled={!includeFemales && !includeLastNames}
              checked={includeMales}
              onChange={(e) => setMales(e.target.checked)}
            >
              Homini
            </Checkbox>
            <Checkbox
              disabled={!includeMales && !includeLastNames}
              checked={includeFemales}
              onChange={(e) => setFemales(e.target.checked)}
            >
              Dame
            </Checkbox>
            <Checkbox
              disabled={!includeFemales && !includeMales}
              checked={includeLastNames}
              onChange={(e) => setLastNames(e.target.checked)}
            >
              Casata
            </Checkbox>
          </div>
        </Filters>
      </Header>

      <List array={shuffled.slice(0, number)}>
        <Button onClick={reshuffle}>Ripeti</Button>
      </List>
    </Card>
  );
};

export default NamesGenerator;
