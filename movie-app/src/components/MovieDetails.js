import React from "react";

const MovieDetails = (props) => {
  return (
    <div className="movieDetails">
      <img src={props.posterUrl} alt={`${props.title} poster`} />

      <div className="movieSpecsContainer">
        <h2>{props.title}</h2>
        <span>{props.rating}</span>

            <div className='movieSpecsContainer'>
                <h2>{props.title}</h2>
                <span>{props.rating}</span>
                
                    <div className='movieInfo'>
                        <span className='info'>{props.rated}</span>
                        <span className='info'>{props.runtime}</span>
                        <span className='info'>{props.genre}</span>
                    </div>

                <h3>Plot</h3>
                <p>{props.plot}</p>

                <h3>Actors</h3>
                <p>{props.actors}</p>

            </div>
            

        <h3>Plot</h3>
        <p>{props.plot}</p>

        <h3>Actors</h3>
        <p>{props.actors}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
