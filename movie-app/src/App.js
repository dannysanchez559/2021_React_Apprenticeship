import React, { useState, useEffect } from "react";
import "./App.css";
import { getMoviesByName } from "./utils/api";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movie, setMovie] = useState({});

  const getMoviesByNameAPI = async (name) => {
    try {
      const moviesAPI = await getMoviesByName(name);
      setMovie(moviesAPI);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesByNameAPI("Batman");
  }, []);

  // async componentDidMount () {
  //   try {
  //     const movie = await getMoviesByName('Batman');
  //     this.setState({
  //       movieTest: movie,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   }

  console.log(movie);

  return (
    <div className="App">
      {movie && (
        <>
          <MovieCard
            title={movie?.Title}
            posterUrl={movie?.Poster}
            type={movie?.Type}
          />

          <MovieDetails
            posterUrl={movie?.Poster}
            title={movie?.Title}
            rated={movie?.Rated}
            runtime={movie?.Runtime}
            genre={movie?.Genre}
            plot={movie?.Plot}
            actors={movie?.Actors}
            rating={movie?.imdbRating}
          />
        </>
      )}
    </div>
  );
};

export default App;
