import React, { useState, useEffect } from "react";
import "./App.css";
import { getTopNetflixMovies } from "./utils/api";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

const App = () => {
  const [netflixMovies, setNetflixMovies] = useState([]);

  const getTopNetflixMoviesAPI = async (movieLists) => {
    try {
      const movieListsAPI = await getTopNetflixMovies(...movieLists);
      setNetflixMovies(movieListsAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const netflixTopMovies = [
      "tt8421350",
      "tt5562070",
      "tt1082109",
      "tt2531336",
      "tt6143796",
      "tt12427840",
      "tt4052886",
      "tt0211933",
      "tt7555294",
      "tt0362227",
    ];
    getTopNetflixMoviesAPI(netflixTopMovies);
  }, []);

  return (
    <div className="App">
      {netflixMovies.length > 0 && (
        <>
          <Header />
          <Carousel movieList={netflixMovies} />
        </>
      )}
    </div>
  );
};

export default App;
