export const getMoviesByName = async (name) => {
  try {
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?t=${name}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetailsById = async (id) => {
  try {
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error(error);
  }
};
