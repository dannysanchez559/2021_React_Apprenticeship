import React, { useState } from 'react';
import { Modal as CustomModal } from './';
import Modal from 'react-modal';

const MovieCard = ({
  posterUrl,
  title,
  movieId,
  SpinnerComponent,
  loading,
  setLoading,
  loadTime,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement('#root');

  return (
    <>
      <div className="moviecard">
        {loading ? (
          <SpinnerComponent
            loading={loading}
            loadTime={loadTime}
            setLoading={setLoading}
          />
        ) : (
          <button
            className="movieButton"
            onClick={() => {
              document.querySelector('body').style.overflow = 'hidden';
              document.querySelector('html').style.overflow = 'hidden';
              return setModalIsOpen(true);
            }}
          >
            <img src={posterUrl} alt={`${title} poster`} />
            <h3>{title}</h3>
          </button>
        )}
      </div>

      <Modal
        className="modalWindow"
        isOpen={modalIsOpen}
        onRequestClose={() => {
          document.querySelector('body').style.overflow = 'scroll';
          document.querySelector('html').style.overflow = 'scroll';
          return setModalIsOpen(false);
        }}
      >
        <CustomModal
          movieId={movieId}
          setIsOpen={setModalIsOpen}
          SpinnerComponent={SpinnerComponent}
          loading={loading}
          setLoading={setLoading}
          loadTime={1500}
        />
      </Modal>
    </>
  );
};

export default MovieCard;
