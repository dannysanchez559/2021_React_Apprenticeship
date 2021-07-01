import React, { useState } from "react";
import { Modal as CustomModal } from "./";
import Modal from 'react-modal';

const MovieCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

    Modal.setAppElement('#root');

    if (modalIsOpen) {
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('html').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'scroll';
        document.querySelector('html').style.overflow = 'scroll';
    }

    return (
        <>
        <div className='moviecard'>
            <button className="movieButton" onClick={() => setModalIsOpen(true)}>
                <img 
                    src={props.posterUrl} 
                    alt={`${props.title} poster`} 
                />
                <h3>{props.title}</h3>
            </button>
            
        </div>

        <Modal className="modalWindow" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                
                <CustomModal 
                    movieId={props.movieId} 
                    isOpen={modalIsOpen}
                    setIsOpen={setModalIsOpen}
                />
            </Modal>
        </>
    )
}

export default MovieCard;
