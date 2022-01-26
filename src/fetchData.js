import { useEffect, useState } from "react";

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch(`/.netlify/functions/google-sheets/sheet-data`)
      ).json();

      setData(data);
    };

    fetchData();
  }, []);

  return data;
};
