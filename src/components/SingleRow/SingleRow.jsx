import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import axios from "../../axios";
import { withRouter } from "react-router-dom";
import { sliderConfig } from "../../Utilities";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SingleRow.css";
const SingleRow = ({ title, fetchUrl }) => {
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
  return (
    <div className="singleRow">
      <h2 className="singleRow__title">{title}</h2>
      <Slider className="singleRow__slider" {...sliderConfig}>
        {movies.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            poster={movie.backdrop_path}
            title={movie.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default withRouter(SingleRow);
