import React from "react";
import { Link } from "react-router-dom";

import "./MovieCard.css";
const MovieCard = ({ id, title, poster }) => {
  return (
    <div class="movieCard">
      <Link to={`/play/${id}`}>
        <div className="movieCard__container">
          {poster == null ? (
            <span className="movieCard__title">{title}</span>
          ) : null}
          <img
            class="movieCard__poster"
            src={
              poster !== null
                ? `https://image.tmdb.org/t/p/w500/${poster}`
                : "noImage.png"
            }
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
