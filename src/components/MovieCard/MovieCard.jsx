import React, { useState, useEffect } from "react";
import InfoIcon from "@material-ui/icons/Info";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Link } from "react-router-dom";
import "./MovieCard.css";
const MovieCard = ({ id, title, poster, watching }) => {
  let timeLeft = Math.floor(Math.random() * 99) + 1;
  let barWidth = 100 - timeLeft;
  return (
    <div className={watching ? "movieCard watching" : "movieCard "}>
      <Link to={`/play/${id}`}>
        <div className="movieCard__container">
          {poster == null ? (
            <span className="movieCard__title">{title}</span>
          ) : null}
          {watching ? (
            <>
              <div className="movieCard__progressBar">
                <div
                  style={{ width: barWidth + "%" }}
                  className="movieCard__colorBar"
                ></div>
              </div>
              <div className="movieCard__watchingData">
                <h3>{title}</h3>
                <div className="movieCard__lowerPart">
                  <div className="movieCard__buttons">
                    <InfoIcon />
                    <PlayCircleFilledWhiteIcon />
                  </div>
                  <span className="movieCard__timeLeft">
                    {timeLeft} min left
                  </span>
                </div>
              </div>
            </>
          ) : null}
          <img
            className="movieCard__poster"
            src={
              poster !== null
                ? `https://image.tmdb.org/t/p/w500/${poster}`
                : "../noImage.png"
            }
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
