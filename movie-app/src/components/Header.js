import React, { useState } from "react";
import { getMoviesByName } from '../utils/api';

function Header() {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState({});

  const getMovieByNameApi = async (name) => {
    try {
      const movieNameData = await getMoviesByName(name);
      setMovieData(movieNameData);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (movieName.length) {
      getMovieByNameApi(movieName);
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
