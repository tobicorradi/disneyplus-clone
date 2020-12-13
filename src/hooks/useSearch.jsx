import React, { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (apiKey) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([""]);
  useEffect(() => {
    if (query != "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        )
        .then((response) => {
          const { data } = response;
          setSearchResults(data.results);
          console.log(data.results);
        });
    }
  }, [query]);
  return { query, searchResults, setQuery };
};
export default useSearch;
