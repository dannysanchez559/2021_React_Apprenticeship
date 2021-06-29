import React from "react";

function Header(props) {

  const onSubmit = () => {

    if (props.movieName.length) {
      props.getMovieSearchResultsApi(props.movieName);
    } 
    else {
      window.alert("Please enter a search term");
    }
  };

  return (
    <div className="header">
      <h1 className="app-title" onClick={() => props.onHomepage()}>Reactoads MovieApp</h1>

        <div className="searchbar-container">
          <input type="text" placeholder="Enter movie name" name="searchbar" value={props.movieName} onChange={props.onMovieNameChange}/>
          <button id="searchbutton" onClick={() => onSubmit()}></button>
        </div>
        

    </div>
  );
}

export default Header;
