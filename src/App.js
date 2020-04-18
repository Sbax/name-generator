import React from "react";
import Loader from "./components/Loader";
import Main from "./Main";
import fetchData from "./fetchData";
import ReactGA from "react-ga";

const App = () => {
  ReactGA.initialize(process.env.REACT_APP_GA);
  ReactGA.set({ anonymizeIp: true });
  ReactGA.pageview(window.location.pathname + window.location.search);

  const data = fetchData();
  if (!data) return <Loader />;

  const { names, places, dishes, regions } = data;
  if (!names || !places || !dishes || !regions) return <Loader />;

  return <Main {...data} />;
};

export default App;
