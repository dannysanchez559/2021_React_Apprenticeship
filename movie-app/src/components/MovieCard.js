import React, { useState } from "react";
import Modal from "./Modal";

const MovieCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="moviecard">
      <img src={props.posterUrl} alt={`${props.title} poster`} />

      <h3 className="moviecard__title">{props.title}</h3>

      <span className="movie__type">{props.type}</span>
      <button onClick={() => toggleModal()}>View</button>
      {isOpen && <Modal toggleModal={toggleModal} movieId={props.movieId} />}
    </div>
  );
};

export default MovieCard;
