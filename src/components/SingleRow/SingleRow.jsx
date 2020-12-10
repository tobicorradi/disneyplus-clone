import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import axios from "../../axios";
import { Link, withRouter } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SingleRow.css";
const SingleRow = ({ title, fetchUrl }) => {
  const config = {
    arrows: true,
    accessibility: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <button className="arrow-button">
        <ArrowForwardIosIcon className="slick-arrows" />
      </button>
    ),
    prevArrow: (
      <button className="arrow-button">
        <ArrowBackIosIcon className="slick-arrows" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.items);
      setLoading(false);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);
  // console.log(movies);
  return (
    <div class="singleRow">
      <h2 class="singleRow__title">{title}</h2>
      <Slider className="singleRow__slider" {...config}>
        {movies.map((movie) => (
          <LazyLoad throttle={200} height={300}>
            <CSSTransition
              key={movie.id}
              transitionName="fade"
              transitionAppear
              transitionAppearTimeout={100}
              transitionEnter={false}
              transitionLeave={false}
            >
              <MovieCard
                id={movie.id}
                key={movie.id}
                poster={movie.backdrop_path}
                title={movie.title}
              />
            </CSSTransition>
          </LazyLoad>
        ))}
      </Slider>
    </div>
  );
};

export default withRouter(SingleRow);
