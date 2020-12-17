import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { sliderConfig } from "../../utils";
import Skeleton from "@material-ui/lab/Skeleton";
import useSingleRow from "../../hooks/useSingleRow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SingleRow.css";
const SingleRow = ({ title, fetchUrl, watching }) => {
  const { movies } = useSingleRow(fetchUrl);
  return (
    <>
      {movies.length > 0 ? (
        <article className="singleRow">
          <h2 className="singleRow__title">{title}</h2>
          <Slider className="singleRow__slider" {...sliderConfig}>
            {movies.map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                poster={movie.backdrop_path}
                title={movie.title}
                watching={watching}
              />
            ))}
          </Slider>
        </article>
      ) : (
        <Skeleton animation="wave" variant="rect" width="100%" height={200} />
      )}
    </>
  );
};

export default withRouter(SingleRow);
