import React from 'react';
import MovieCard from './MovieCard';


const MovieList = (props) => {
    return (
        <>

            {/* change following line to dynamic movie name */}
            
            {props.movieList.length > 0 && props.movieList.map((movie) => (
                <React.Fragment key={movie.imdbID}>
                    <MovieCard 
                        key={movie?.imdbID}
                        title={movie?.Title}
                        posterUrl={movie?.Poster}
                        movieId={movie?.imdbID}
                        SpinnerComponent={props.SpinnerComponent}
                        loading={props.loading}
                        setLoading={props.setLoading}
                        loadTime={3000}
                    />
                </React.Fragment>
            ))}
        </>
    )
}

export default MovieList;
