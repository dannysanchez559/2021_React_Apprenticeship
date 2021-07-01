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
      // props.getMovieSearchResultsApi ONLY accepts page in its parameter,
      // and not anything else i.e. the movie name.
      props.setLoading(true);
      props.getMovieSearchResultsApi();
      props.setMovieListSearchTerm(props.uiMovieName);
      props.setUiMovieName("");
    }
    
  };

  return (
    <div className="header">
      <h1 className="app-title" onClick={() => props.onHomepage()}>Reactoads MovieApp</h1>
      
      <div className="right-header-div">
        <div className="searchbar-container">
          <input
            type="text"
            placeholder="Enter movie name"
            name="searchbar"

            value={props.uiMovieName}

            onChange={props.onMovieNameChange}
          />
          <button id="searchbutton" onClick={() => onSubmit()}></button>
        </div>
        
        {(props.errors?.searchbar?.length) ? (
        <div className="error-container" >{props.errors.searchbar}</div>
      ) : null}

      </div>
 
    </div>
  );
}

export default Header;
