import React from "react";
import { useEffect } from "react";

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=beb5ce4d";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return <h1></h1>;
};

export default App;

//OMDb key = beb5ce4d
