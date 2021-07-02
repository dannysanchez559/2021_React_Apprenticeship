import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movieList, SpinnerComponent, loading, setLoading }) => {
  return (
    <>
      {/* change following line to dynamic movie name */}

      {movieList.length > 0 &&
        movieList.map((movie) => (
          <React.Fragment key={movie.imdbID}>
            <MovieCard
              key={movie?.imdbID}
              title={movie?.Title}
              posterUrl={movie?.Poster}
              movieId={movie?.imdbID}
              SpinnerComponent={SpinnerComponent}
              loading={loading}
              setLoading={setLoading}
              loadTime={3000}
            />
          </React.Fragment>
        ))}
    </>
  );
};

export default MovieList;
