import React, { useState } from 'react';
import Modal from './Modal';

const MovieCard = (props) => {
const [isOpen, setIsOpen] = useState(false);

 const toggleModal = () => {
     setIsOpen(!isOpen);
 } 

    return (
        <div className='moviecard'>
            <button className="movieButton" onClick={() => toggleModal()}>
                <img 
                    src={props.posterUrl} 
                    alt={`${props.title} poster`} 
                />
                
                <h3>{props.title}</h3>
            </button>

            
            
            {/* <button onClick={() => toggleModal()}>View</button> */}
            {isOpen && 
               ( <Modal 
                    toggleModal={toggleModal} 
                    movieId={props.movieId} 
                />)
            }
        </div>
    )
}

export default MovieCard;