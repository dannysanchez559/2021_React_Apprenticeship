import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movielist">
      {props.movieList.length > 0 &&
        props.movieList.map((movie) => (
          <React.Fragment key={movie.imdbID}>
            <MovieCard
              key={movie?.imdbID}
              title={movie?.Title}
              posterUrl={movie?.Poster}
              type={movie?.Type}
              movieId={movie?.imdbID}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default MovieList;
