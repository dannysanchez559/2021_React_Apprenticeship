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
      <h1>Movie App Title</h1>

        <input type="text" placeholder="Enter movie name" name="searchbar" value={props.movieName} onChange={props.onMovieNameChange}/>
        <button id="searchbutton" onClick={() => onSubmit()}></button>

    </div>
  );
}

export default Header;
