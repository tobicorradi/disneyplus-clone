import React, { useState, useEffect } from "react";
import axios from "../axios";
const useSingleRow = (fetchUrl) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.items);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);
  return { movies };
};
export default useSingleRow;
