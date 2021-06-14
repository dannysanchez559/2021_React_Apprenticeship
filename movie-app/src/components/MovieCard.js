import React from 'react';


const MovieCard = (props) => {

    return (
        <div className='moviecard'>
            <img 
                src={props.posterUrl} 
                alt={`${props.title} poster image`} 
            />

            <h3 className='moviecard__title'>{props.title}</h3>

            <span className='movie__type'>{props.type}</span>
        </div>
    )
}

export default MovieCard;