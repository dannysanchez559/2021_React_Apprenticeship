import React, { useState, useEffect } from "react";
import "./App.css";
import { getTopNetflixMovies } from "./utils/api";
// import MovieCard from "./components/MovieCard";
// import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

const App = () => {
  // const netflixTopMovies = [
  //   "tt8421350",
  //   "tt5562070",
  //   "tt1082109",
  //   "tt2531336",
  //   "tt6143796",
  //   "tt12427840",
  //   "tt4052886",
  //   "tt0211933",
  //   "tt7555294",
  //   "tt0362227",
  // ];

  // const [movie, setMovie] = useState({});
  const [netflixMovies, setNetflixMovies] = useState([]);

  // const getMoviesByNameAPI = async (name) => {
  //   try {
  //     const moviesAPI = await getMoviesByName(name);
  //     setMovie(moviesAPI);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getTopNetflixMoviesAPI = async (movieLists) => {
    try {
      const movieListsAPI = await getTopNetflixMovies(...movieLists);
      setNetflixMovies(movieListsAPI);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getMoviesByNameAPI("Batman");
  // }, []);

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

          {/* <MovieCard
            title={movie?.Title}
            posterUrl={movie?.Poster}
            type={movie?.Type}
          /> */}

          {/* <MovieDetails
            posterUrl={movie?.Poster}
            title={movie?.Title}
            rated={movie?.Rated}
            runtime={movie?.Runtime}
            genre={movie?.Genre}
            plot={movie?.Plot}
            actors={movie?.Actors}
            rating={movie?.imdbRating}
          /> */}
        </>
      )}
    </div>
  );
};

export default App;
