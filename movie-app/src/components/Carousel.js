import React from "react";
import MovieCard from "./MovieCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

// install Swiper modules
SwiperCore.use([Navigation]);

const Carousel = (props) => {
  return (
    <div className="carousel">
      <h2>{props.carouselTitle}</h2>
      <Swiper 
        spaceBetween={0}
        slidesPerView={5}
        navigation={true}
        breakpoints={{
          "1024": {slidesPerView: 3},
        }}
        >
        {props.movieList.length > 0 && props.movieList.map((movie) => (
          
          <SwiperSlide key={movie?.imdbID} >
            <MovieCard
              title={movie?.Title}
              posterUrl={movie?.Poster}
              type={movie?.Type}
              movieId={movie?.imdbID}
            />
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
