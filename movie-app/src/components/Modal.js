import React, {useState, useEffect} from 'react';
import MovieDetails from './MovieDetails';
import { getMovieDetailsById } from '../utils/api';

const Modal = (props) => {
    const [modalDetails, setModalDetails] = useState({});

    const getMovieDetailsByIdAPI = async ()  => {
       try {
        const data = await getMovieDetailsById(props.movieId);
        setModalDetails(data);
       } catch (error) {
           console.error(error);
       }                 
    }

    useEffect(() => {
        getMovieDetailsByIdAPI();
    }, []);

    return (
        <>
            { modalDetails?.Title && 
            <div>
                <button onClick={() => props.toggleModal()}>close</button>
                <MovieDetails 
                    posterUrl={modalDetails?.Poster} 
                    title={modalDetails?.Title}
                    rating={modalDetails?.imdbRating}
                    rated={modalDetails?.Rated}
                    runtime={modalDetails?.Runtime}
                    genre={modalDetails?.Genre}
                    plot={modalDetails?.Plot}
                    actors={modalDetails?.Actors}
                />
            </div>
           }
        </>
    );
}

export default Modal;
