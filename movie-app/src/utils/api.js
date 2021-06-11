import { Component } from 'react';

export class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };

    this.getMoviesByName = this.getMoviesByName.bind(this);
    this.getMovieDetailsById = this.getMovieDetailsById.bind(this);
  }

  getMovieDetailsById = async () => {
    if (this.props.searchTerm) {
      try {
        const url = `${process.env.REACT_APP_OMDB_API_URL}/?i=${this.props.searchTerm}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

        await fetch(url)
          .then((response) => response.json())
          .then((data) => this.setState({ movie: data }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  getMoviesByName = async () => {
    if (this.props.searchTerm){
      try {
        const url = `${process.env.REACT_APP_OMDB_API_URL}/?t=${this.props.searchTerm}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

        await fetch(url)
          .then((response) => response.json())
          .then((data) => this.setState({ movie: data }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  render(){
    return(
      this.props.children({
        getMovieDetailsById: this.getMovieDetailsById,
        getMoviesByName: this.getMoviesByName,
        movie: this.state.movie,
      })
    );
  }

}
