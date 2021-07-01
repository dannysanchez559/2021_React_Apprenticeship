import React from "react";

const MovieDetails = (props) => {
  const displayRatings = () => {
    const ratingsArr = props.ratingsArray.map((ratingType, index) => (
      <div className="modal-left-ratings" key={index}>
        <span>{ratingType.Value}</span>
        <span>
          {
            ratingType.Source === 'Internet Movie Database'
              ? 'IMDb' : ratingType.Source
          }
        </span>
      </div>
    ));

    if (!ratingsArr.length) {
      return null;
    }

    return ratingsArr;
  };

  return (
    <div className="movieDetails">
        <div className="modal-left">
            <img src={props.posterUrl} alt={`${props.title} poster`} />
            
            <div className="modal-left-ratings-wrapper">
              {displayRatings()}
            </div>
        </div>
      

        <div className='modal-right'>
            <div className="titleDiv">
                <h2>{props.title}</h2>
                <span>{props.rating}</span>
            </div>
            
            <div className='movieInfo'>
                <span className='info'>{props.genre}</span>
                <span className='info'>{props.year}</span>
                <span className='info'>{props.rated}</span>
                <span className='info'>{props.runtime}</span>
            </div>

            <div className="modal-right-bottom">
                <h3>Plot</h3>
                <p>{props.plot}</p>

                <h3>Actors</h3>
                <p>{props.actors}</p>
            </div>
        </div>
    </div>
  );
};

export default MovieDetails;
