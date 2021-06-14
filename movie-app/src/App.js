import React from 'react';
import "./App.css";
import { getMoviesByName } from "./utils/api";
import MovieCard from "./components/MovieCard";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTest: {},
    }
  }

  async componentDidMount () {
    try {
      const movie = await getMoviesByName('Batman');
      this.setState({
        movieTest: movie,
      });
    } catch (error) {
      console.error(error);
    }

    }


  render() {

    return (
      <div className="App">
          
        {this.state.movieTest &&
          <MovieCard 
            title={this.state.movieTest?.Title} 
            posterUrl={this.state.movieTest?.Poster}
            type={this.state.movieTest?.Type}
        />
        }
      </div>
    );


  }
  
}

export default App;
