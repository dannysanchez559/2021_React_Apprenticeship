import React, { useState, useEffect } from 'react';
import '../App.css';
import { getTopMovies, getMovieSearchResults } from '../utils/api';
import { Carousel, Header, MovieList, PaginationBar, Spinner } from './';

const MovieApp = () => {
  const [netflixMovies, setNetflixMovies] = useState([]);
  const [staffPickMovies, setStaffPickMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  // These states (movieName and setMovieName) would be used to interact the API
  const [movieName, setMovieName] = useState('');
  // These states (uiMovieName and setUiMovieName) would be used on the UI side
  const [uiMovieName, setUiMovieName] = useState('');
  const [homepageIsActive, setHomepageIsActive] = useState(true);
  const [errors, setErrors] = useState({});
  const [movieListSearchTerm, setMovieListSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // This is used on the onClick for homepage on header "logo"
  const toggleHomepage = () => {
    setHomepageIsActive(true);
    setLoading(true);
  };

  const onMovieNameChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    switch (name) {
      case 'searchbar':
        if (!value.length) {
          setErrors((err) => ({ ...err, [name]: 'Required.' }));
        } else if (value.length < 3) {
          setErrors((err) => ({
            ...err,
            [name]: 'Needs to be at least 3 characters.',
          }));
        } else {
          setErrors((err) => ({ ...err, [name]: '' }));
        }
        break;
      default:
        break;
    }

    // This will update the movie name which interacts the API
    setMovieName(value);
    // This will update only on the UI side with no affect on the API
    setUiMovieName(value);
  };

  const getMovieSearchResultsApi = async (page) => {
    try {
      const movieNameTrim = movieName.trim();
      const movieNameData = await getMovieSearchResults(movieNameTrim, page);

      if (movieNameData.Response === 'False') {
        setErrors((err) => ({
          ...err,
          searchbar: `${movieNameData.Error}, please try a more specific search term.`,
        }));
        throw new Error(movieNameData.Error);
      }

      if (movieNameData.Response === 'True') {
        setMovieList(movieNameData.Search);
        setTotalResults(movieNameData.totalResults);
        // Always set homepageIsActive to false if the user searches
        setHomepageIsActive(false);
      }
    } catch (error) {
      console.error(error);
      setErrors((err) => ({ ...err, searchbar: error.message }));
    }
  };

  const getTopNetflixMoviesAPI = async (movieLists) => {
    try {
      const movieListsAPI = await getTopMovies(...movieLists);
      setNetflixMovies(movieListsAPI);
    } catch (error) {
      console.error(error);
    }
  };

  const getTopStaffPickMoviesAPI = async (movieLists) => {
    try {
      const movieListsAPI = await getTopMovies(...movieLists);
      setStaffPickMovies(movieListsAPI);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const netflixTopMovies = [
      'tt8421350',
      'tt5562070',
      'tt1082109',
      'tt2531336',
      'tt6143796',
      'tt10839422',
      'tt4052886',
      'tt0211933',
      'tt7555294',
      'tt0362227',
    ];
    getTopNetflixMoviesAPI(netflixTopMovies);

    const topStaffPickMovies = [
      'tt5052448',
      'tt2911666',
      'tt0206634',
      'tt1375666',
      'tt0468569',
      'tt0114709',
      'tt0298130',
      'tt0071562',
    ];
    getTopStaffPickMoviesAPI(topStaffPickMovies);

    setLoading(true);
  }, []);

  return (
    <div className="App">
      <div className="background-img"></div>
      <div className="background-overlay"></div>

      <Header
        getMovieSearchResultsApi={getMovieSearchResultsApi}
        onMovieNameChange={onMovieNameChange}
        onHomepage={toggleHomepage}
        setUiMovieName={setUiMovieName}
        uiMovieName={uiMovieName}
        errors={errors}
        setMovieListSearchTerm={setMovieListSearchTerm}
        setLoading={setLoading}
      />

      {!homepageIsActive ? null : (
        <>
          <Carousel
            carouselTitle={'Top Hits on Netflix'}
            movieList={netflixMovies}
            SpinnerComponent={Spinner}
            loading={loading}
            setLoading={setLoading}
          />

          <Carousel
            carouselTitle={'Staff Top Picks'}
            movieList={staffPickMovies}
            SpinnerComponent={Spinner}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}

      {homepageIsActive ? null : (
        <div className="movielist">
          <div className="movieSearchTitleBox">
            <h3 className="movieSearchTitle">{`"${movieListSearchTerm}"`}</h3>
          </div>

          <MovieList
            movieList={movieList}
            SpinnerComponent={Spinner}
            loading={loading}
            setLoading={setLoading}
          />
          <PaginationBar
            totalResults={totalResults}
            getNewPage={getMovieSearchResultsApi}
            setLoading={setLoading}
          />
        </div>
      )}
    </div>
  );
};

export default MovieApp;
