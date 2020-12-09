import React from "react";
import "./MovieCard.css";
const MovieCard = ({ title, poster }) => {
  return (
    <div class="movieCard">
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
    </div>
  );
};

export default MovieCard;
