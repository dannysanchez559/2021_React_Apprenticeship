import React, { useState, useEffect } from "react";
import "./App.css";
import { getTopNetflixMovies, getMovieSearchResults } from "./utils/api";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieList from "./components/MovieList";

const App = () => {
  const [netflixMovies, setNetflixMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieSearchResultsApi = async (name) => {
    try {
      const movieNameData = await getMovieSearchResults(name);

      if (movieNameData.Response === 'False') {
        window.alert(`${movieNameData.Error}, please try a more specific search term.`);
        throw new Error(movieNameData.Error);
      }

      if (movieNameData.Response === 'True') {
        setMovieList(movieNameData.Search);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      <Header getMovieSearchResultsApi={getMovieSearchResultsApi} />

      {netflixMovies?.length > 0 && 
        <Carousel movieList={netflixMovies} />
      }

      {movieList?.length > 0 && 
        <MovieList movieList={movieList} />
      }
    
    </div>
  );
};

export default App;
