import logo from "./logo.svg";
import "./App.css";
import { getMoviesByName, getMovieDetailsById } from "./utils/api";
import MovieCard from "./components/MovieCard";

function App() {
  const moviesByName = getMoviesByName("Guardians of the Galaxy Vol. 2");
  getMovieDetailsById("tt0091541");

  return (
    <div className="App">
      
      {moviesByName && 
        <MovieCard 
          title={moviesByName.Title} 
          posterUrl={moviesByName.Poster}
          type={moviesByName.Type}
        />}
    </div>
  );
}

export default App;
