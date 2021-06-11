import "./App.css";
import { useState } from 'react';
import { Api } from './utils/api';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    event.preventDefault();
  }

  return (
    <div>
      <label>Search</label>
      <input type="text" value={searchTerm} name="search" onChange={handleChange} />
      <Api
        searchTerm={searchTerm}
      >
        {({ movie, getMovieDetailsById, getMoviesByName }) => (
            <div>
              <button type="button" onClick={() => getMovieDetailsById(searchTerm)}>getMovieDetailsById</button>
              <button type="button" onClick={() => getMoviesByName(searchTerm)}>getMoviesByName</button>
              <p>---------------------------------------------------------------------------------</p>
              {movie &&
                <div>
                  <p>{movie.Title}</p>
                  <p>{movie.Plot}</p>
                  <p>{movie.Actors}</p>
                </div>
              }
            </div>
        )}
      </Api>
    </div>
  );
}

export default App;
