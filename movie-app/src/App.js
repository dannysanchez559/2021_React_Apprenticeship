import logo from "./logo.svg";
import "./App.css";
import { getMoviesByName, getMovieDetailsById } from "./utils/api";

function App() {
  getMoviesByName("Guardians of the Galaxy Vol. 2");
  getMovieDetailsById("tt0091541");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
