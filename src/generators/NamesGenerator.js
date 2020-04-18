import React from "react";
import { shuffle } from "../utils";
import ShuffleGroupGenerator from "./ShuffleGroupGenerator";

const getNames = (array, selected) => {
  const [females, males, lastNames] = array
    .map((e) => ({ ...e, items: shuffle(e.items) }))
    .map(({ items }) => items);

  const [includeFemales, includeMales, includeLastNames] = selected.map(
    ({ include }) => include
  );

  if (!includeMales && !includeFemales) return lastNames;

  const names = (() => {
    if (!includeFemales && !includeMales) return [];
    if (!includeMales) return females;
    if (!includeFemales) return males;

    return shuffle([...males, ...females]);
  })();

  if (!includeLastNames) return names;
  return names.map(
    (name, index) => `${name} ${lastNames[index % lastNames.length]}`
  );
};

const NamesGenerator = ({ ...params }) => {
  return <ShuffleGroupGenerator {...params} getItems={getNames} />;
};

export default NamesGenerator;
