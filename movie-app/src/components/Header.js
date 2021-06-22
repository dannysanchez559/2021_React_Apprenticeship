import React, { useState } from "react";

function Header(props) {
  const [movieName, setMovieName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (movieName.length) {
      props.getMovieSearchResultsApi(movieName);
    } 
    else {
      window.alert("Please enter a search term");
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setMovieName(value);
  }

  return (
    <div className="header">
      <h1>Movie App Title</h1>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter movie name" name="searchbar" value={movieName} onChange={onChange}/>
        <button id="searchbutton" type="submit"></button>
      </form>
    </div>
  );
}

export default Header;
