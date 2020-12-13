import React, { useState, useEffect } from "react";
import axios from "../axios";

const useDetailPage = (movieId, apiKey) => {
  const [singleMovie, setSingleMovie] = useState([""]);
  const [recommended, setRecommended] = useState([""]);
  const [videos, setVideos] = useState([""]);
  const [cast, setCast] = useState([""]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
      .then((response) => {
        const { data } = response;
        setSingleMovie(data);
        setVideos(data.videos.results);
      });
    axios
      .get(
        `movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        const { data } = response;
        setRecommended(data.results);
      });
    axios
      .get(`movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        const { data } = response;
        setCast(data.cast);
      });
  }, [movieId]);
  return { singleMovie, recommended, videos, cast };
};

export default useDetailPage;
