import React, { useState, useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sedRequest = async () => {
    return await fetch("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return res.json();
    });
  };

  useEffect(() => {
    setLoading(true);

    sedRequest().then((res) => {
      setData(res.results);
    });
  }, []);

  return <>{loading ? <Loader /> : <Layout data={data} />}</>;
}

export default App;
