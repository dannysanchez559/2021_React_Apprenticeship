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
        {props.movieList.map((movie) => (
          <MovieCard
            key={movie?.imdbID}
            title={movie?.Title}
            posterUrl={movie?.Poster}
            type={movie?.Type}
          />

          // <div key={movie?.imdbID}>
          //   <img src={movie?.Poster} alt={`${movie?.Title} poster`} />
          //   <p className="legend">{movie?.Title}</p>
          // </div>

          // <img
          //   key={movie?.imdbID}
          //   src={movie?.Poster}
          //   alt={`${movie?.Title} poster`}
          // />
        ))}
        {/* <button className=''></button> */}
      </Flickity>
    </>
  );
};

export default Carousel;
