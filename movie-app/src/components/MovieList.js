import React from 'react';
import MovieCard from './MovieCard';


const MovieList = (props) => {
    return (
        <div className='movielist'>

            {/* change following line to dynamic movie name */}
            <div className="movieSearchTitleBox">
            {<h3 className="movieSearchTitle">"Batman"</h3>}

            </div>
            {props.movieList.length > 0 && props.movieList.map((movie) => (
                <React.Fragment key={movie.imdbID}>
                    <MovieCard 
                        key={movie?.imdbID}
                        title={movie?.Title}
                        posterUrl={movie?.Poster}
                        movieId={movie?.imdbID}
                    />
                </React.Fragment>
            ))
        }
        </div>
    )
}

export default MovieList
