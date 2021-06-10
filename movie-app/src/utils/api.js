export const getMoviesByName = async (name) => {
  try {
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?title=${name}&apikey=${process.env.OMDB_API_KEY}`;

    await fetch(url)
      .then((response) => response.json)
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetailsById = async (id) => {
  try {
    const url = `${process.env.REACT_APP_OMDB_API_URL}/?i=${id}&apikey=${process.env.OMDB_API_KEY}`;

    await fetch(url)
      .then((response) => response.json)
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};
