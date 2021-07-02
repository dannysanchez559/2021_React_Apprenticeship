import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import { getMovieDetailsById } from '../utils/api';

const Modal = ({
  movieId,
  setIsOpen,
  SpinnerComponent,
  loading,
  setLoading,
  loadTime,
}) => {
  const [modalDetails, setModalDetails] = useState({});

  const getMovieDetailsByIdAPI = async () => {
    try {
      const data = await getMovieDetailsById(movieId);
      setModalDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieDetailsByIdAPI();
    setLoading(true);
  }, []);

  return (
    <>
      {modalDetails?.Title && (
        <div>
          <div className="closeButtonContainer">
            <button
              id="closeModalButton"
              className="closeModalButton"
              onClick={() => {
                document.querySelector('body').style.overflow = 'scroll';
                document.querySelector('html').style.overflow = 'scroll';
                return setIsOpen(false);
              }}
            ></button>
          </div>
          <MovieDetails
            posterUrl={modalDetails?.Poster}
            title={modalDetails?.Title}
            rating={modalDetails?.imdbRating}
            rated={modalDetails?.Rated}
            runtime={modalDetails?.Runtime}
            genre={modalDetails?.Genre}
            plot={modalDetails?.Plot}
            actors={modalDetails?.Actors}
            ratingsArray={modalDetails?.Ratings}
            year={modalDetails?.Year}
            SpinnerComponent={SpinnerComponent}
            loading={loading}
            setLoading={setLoading}
            loadTime={loadTime}
          />
        </div>
      )}
    </>
  );
};

export default Modal;
