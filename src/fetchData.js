import { useState, useEffect } from "react";
import { getSheet } from "./sheets";
import { rotateMatrix } from "./utils";

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        getSheet("random!A2:B", (response) => {
          const random = response.result.values.reduce(
            ({ places }, [place]) => {
              if (place) places.push(place);

              return { places };
            },
            {
              places: [],
            }
          );

          setData((data) => ({ ...data, ...random }));
        }),

        getSheet("food!A:C", (response) => {
          const [foodTypes, ...foodRotated] = response.result.values;
          const food = rotateMatrix(foodRotated);

          const dishes = foodTypes.map((name, index) => ({
            name,
            items: food[index],
          }));

          console.log(dishes);

          setData((data) => ({ ...data, dishes }));
        }),

        getSheet("regions!A:D", (response) => {
          const [regionNames, ...citiesRotated] = response.result.values;
          const cities = rotateMatrix(citiesRotated);

          const regions = regionNames.map((name, index) => ({
            name,
            items: cities[index],
          }));

          setData((data) => ({ ...data, regions }));
        }),

        getSheet("names!A:D", (response) => {
          const [labels, ...itemsRotated] = response.result.values;
          const items = rotateMatrix(itemsRotated);

          const names = labels.map((name, index) => ({
            name,
            items: items[index],
          }));

          setData((data) => ({ ...data, names }));
        }),
      ]);
    };

    fetchData();
  }, []);

  return data;
};
