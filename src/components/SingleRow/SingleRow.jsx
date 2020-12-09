import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import axios from "../../axios";
import { Link, withRouter } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
          <Link to={`/play/${movie.id}`}>
            <MovieCard
              key={movie.id}
              poster={movie.backdrop_path}
              title={movie.title}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default withRouter(SingleRow);
