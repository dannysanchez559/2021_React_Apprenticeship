import React from 'react';

const MovieDetails = ({
  posterUrl,
  title,
  rating,
  rated,
  runtime,
  genre,
  plot,
  actors,
  ratingsArray,
  year,
  SpinnerComponent,
  loading,
  setLoading,
  loadTime,
}) => {
  const displayRatings = () => {
    const ratingsArr = ratingsArray.map((ratingType, index) => (
      <div className="modal-left-ratings" key={index}>
        <span>{ratingType.Value}</span>
        <span>
          {ratingType.Source === 'Internet Movie Database'
            ? 'IMDb'
            : ratingType.Source}
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
        {loading ? (
          <SpinnerComponent
            loading={loading}
            loadTime={loadTime}
            setLoading={setLoading}
          />
        ) : (
          <>
            <img src={posterUrl} alt={`${title} poster`} />

            <div className="modal-left-ratings-wrapper">{displayRatings()}</div>
          </>
        )}
      </div>

      <div className="modal-right">
        {loading ? (
          <SpinnerComponent
            loading={loading}
            loadTime={loadTime}
            setLoading={setLoading}
          />
        ) : (
          <>
            <div className="titleDiv">
              <h2>{title}</h2>
              <span>{rating}</span>
            </div>

            <div className="movieInfo">
              <span className="info">{genre}</span>
              <span className="info">{year}</span>
              <span className="info">{rated}</span>
              <span className="info">{runtime}</span>
            </div>

            <div className="modal-right-bottom">
              <h3>Plot</h3>
              <p>{plot}</p>

              <h3>Actors</h3>
              <p>{actors}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
