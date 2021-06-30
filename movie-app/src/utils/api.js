// OMDB API
// -- get movie by name
export const getMoviesByName = async (name) => {
  try {
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?t=${name}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error(error);
  }
};

// -- get movie by id
export const getMovieDetailsById = async (id) => {
  try {
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error(error);
  }
};

// -- get top netflix movies
export const getTopNetflixMovies = async (...movieIds) => {
  try {
    return await Promise.all(
      movieIds.map(async (movieId) => {
        const url = `${process.env.REACT_APP_OMDB_API_URL}/?i=${movieId}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
      })
    );
  } catch (error) {
    console.error(error);
  }
};

// -- get movie search results
export const getMovieSearchResults = async (movieName, pageNumber) => {
  try {
    const page = pageNumber ? pageNumber : 1;
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?s=${movieName}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&page=${page}`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error(error);
  }
};
