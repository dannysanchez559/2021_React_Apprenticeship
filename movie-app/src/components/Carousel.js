import React from 'react';
import MovieCard from './MovieCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

// install Swiper modules
SwiperCore.use([Navigation]);

const Carousel = ({
  carouselTitle,
  movieList,
  SpinnerComponent,
  loading,
  setLoading,
}) => {
  return (
    <div className="carousel">
      <h2>{carouselTitle}</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        navigation={true}
        breakpoints={{
          1920: { slidesPerView: 5, spaceBetween: 0 },
          1440: { slidesPerView: 4, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 0 },
          414: { slidesPerView: 1, spaceBetween: 0 },
          375: { slidesPerView: 1, spaceBetween: 0 },
          320: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <SwiperSlide key={movie?.imdbID}>
              <MovieCard
                title={movie?.Title}
                posterUrl={movie?.Poster}
                type={movie?.Type}
                movieId={movie?.imdbID}
                SpinnerComponent={SpinnerComponent}
                loading={loading}
                setLoading={setLoading}
                loadTime={4000}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
