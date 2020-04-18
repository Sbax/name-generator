import React from "react";
import Loader from "./components/Loader";
import Main from "./Main";
import fetchData from "./fetchData";

const App = () => {
  const data = fetchData();
  if (!data) return <Loader />;

  return <Main {...data} />;
};

export default App;
