import React from "react";

function Header(props) {
  const checkErrors = (errorObject) => {
    // Checks to see if there are empty objects.
    // If there is, stop the function return false
    if (Object.keys(props.errors).length === 0) {
      return false;
    }

    // Checks to see if there are any error messages.
    // If there is, stop the function return false.
    Object.values(errorObject).forEach((err) => {
      if (err.length) {
        return false;
      }
    });

    // If there are no empty objects or error messages,
    // return true i.e. passes all validation.
    return true;
  };

  const onSubmit = () => {
    // If the checkErrors function returns true which means
    // that it passes all validations, then run API.
    if (checkErrors(props.errors)) {
      props.getMovieSearchResultsApi(props.movieName);
      props.setMovieName("");
    }
  };

  return (
    <div className="header">
      <h1 className="app-title" onClick={() => props.onHomepage()}>
        Reactoads MovieApp
      </h1>

      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Enter movie name"
          name="searchbar"
          value={props.movieName}
          onChange={props.onMovieNameChange}
        />
        <button id="searchbutton" onClick={() => onSubmit()}></button>
      </div>

      {props.errors?.searchbar?.length ? (
        <div>{props.errors.searchbar}</div>
      ) : null}
    </div>
  );
}

export default Header;
