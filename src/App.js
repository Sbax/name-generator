import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Main from './Main';
import { getSheet } from './sheets';

const sessionStorageKey = "brancalonia-names";

const App = () => {

  const initialData = JSON.parse(sessionStorage.getItem(sessionStorageKey));
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      await getSheet("data!A2:E", response => {
        const mapped = response.result.values.reduce(({ femaleNames, maleNames, lastNames, places, dishes },
          [femaleName, maleName, lastName, place, dish]) => {
          if (femaleName) femaleNames.push(femaleName);
          if (maleName) maleNames.push(maleName);
          if (lastName) lastNames.push(lastName);
          if (place) places.push(place);
          if (dish) dishes.push(dish);

          return { femaleNames, maleNames, lastNames, places, dishes };
        }, {
          femaleNames: [],
          maleNames: [],
          lastNames: [],
          places: [],
          dishes: []
        });

        setData(mapped);
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(mapped));
      });
    };

    fetchData();
  }, []);

  if (!data)
    return <Loader />

  return <Main {...data} />
}

export default App;
