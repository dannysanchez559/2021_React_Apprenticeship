import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Carousel = (props) => {
  return (
    <div className="carousel">
      <h2>Top Movies on Netflix</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.movieList.length > 0 &&
          props.movieList.map((movie) => (
            <SwiperSlide key={movie?.imdbID}>
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
