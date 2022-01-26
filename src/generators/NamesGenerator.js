import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card, Filters, Header, Title } from "../components/Card";
import Checkbox from "../components/Checkbox";
import Counter from "../components/Counter";
import List from "../components/List";
import { shuffle } from "../utils";

const getNames = (array, filters) => {
  const [
    lastNames,
    humanFemales,
    humanMales,
    morganteFemales,
    morganteMales,
    wildFemales,
    wildMales,
    puppets,
    malebranche,
    wolfCatFemales,
    wolfCatMales,
    ratPeople,
  ] = array;

  if (!filters.females && !filters.males) {
    return shuffle(lastNames.items);
  }

  const names = [];
  if (filters.females) {
    if (filters.humans) names.push(...humanFemales.items);
    if (filters.morgante) names.push(...morganteFemales.items);
    if (filters.wild) names.push(...wildFemales.items);
    if (filters.wolfCat) names.push(...wolfCatFemales.items);
  }

  if (filters.males) {
    if (filters.humans) names.push(...humanMales.items);
    if (filters.morgante) names.push(...morganteMales.items);
    if (filters.wild) names.push(...wildMales.items);
    if (filters.wolfCat) names.push(...wolfCatMales.items);
  }

  if (filters.puppets) names.push(...puppets.items);
  if (filters.malebranche) names.push(...malebranche.items);
  if (filters.ratPeople) names.push(...ratPeople.items);

  if (!filters.lastNames) {
    return shuffle(names);
  }

  return shuffle(
    names.map(
      (name, index) =>
        `${name} ${lastNames.items[index % lastNames.items.length]}`
    )
  );
};

const NamesGenerator = ({ title, array, min = 1, max = 10, start = 5 }) => {
  const [number, setNumber] = useState(start);
  const counterParams = {
    min: min < 1 ? 1 : min,
    max: max < 1 ? 10 : max,
  };

  const [filters, setFilters] = useState({
    lastNames: true,
    males: true,
    females: true,
    humans: true,
    morgante: true,
    wild: true,
    puppets: true,
    malebranche: true,
    wolfCat: true,
    ratPeople: true,
  });

  const [shuffled, setShuffled] = useState(getNames(array, filters));

  useEffect(() => {
    setShuffled(getNames(array, filters));
  }, [array, filters]);

  const reshuffle = () => setShuffled(getNames(array, filters));

  const genderGroup = [
    {
      name: "Homini",
      key: "males",
    },
    {
      name: "Dame",
      key: "females",
    },
    {
      name: "Casate",
      key: "lastNames",
    },
  ];

  const racesGroup = [
    {
      name: "Umani",
      key: "humans",
    },
    {
      name: "Morgante",
      key: "morgante",
    },
    {
      name: "Selvatico",
      key: "wild",
    },
    { name: "Marionetta", key: "puppets" },
    { name: "Malebranche", key: "malebranche" },
    { name: "Gatto Lupo", key: "wolfCat" },
    { name: "Pantegano", key: "ratPeople" },
  ];

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <Filters>
          <Counter {...counterParams} number={number} onChange={setNumber} />
          <div>
            {genderGroup.map(({ name, key }) => (
              <Checkbox
                key={key}
                disabled={
                  filters[key] &&
                  genderGroup.map(({ key }) => filters[key]).filter(Boolean)
                    .length === 1
                }
                checked={filters[key]}
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    [key]: e.target.checked,
                  });
                }}
              >
                {name}
              </Checkbox>
            ))}
          </div>

          <div>
            {racesGroup.map(({ name, key }) => (
              <Checkbox
                key={key}
                disabled={
                  filters[key] &&
                  racesGroup.map(({ key }) => filters[key]).filter(Boolean)
                    .length === 1
                }
                checked={filters[key]}
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    [key]: e.target.checked,
                  });
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

export default NamesGenerator;
