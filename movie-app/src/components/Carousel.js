import React from "react";
import Flickity from "react-flickity-component";
import MovieCard from "./MovieCard";

const flickityOptions = {
  groupCells: true,
};

const Carousel = (props) => {
  return (
    <>
      <h2>Top Movies on Netflix</h2>
      <Flickity options={flickityOptions}>
        {props.movieList.length > 0 && props.movieList.map((movie) => (
          <MovieCard
            key={movie?.imdbID}
            title={movie?.Title}
            posterUrl={movie?.Poster}
            type={movie?.Type}
            movieId={movie?.imdbID}
          />
        ))}
      </Flickity>
    </>
  );
};

export default Carousel;
