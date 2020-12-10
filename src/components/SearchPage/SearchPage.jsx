import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import axios from "axios";
import "./SearchPage.css";
const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([""]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b9e91fb0399084749f4ee7ea4fdad27a&query=${query}`
      )
      .then((response) => {
        const { data } = response;
        setSearchResults(data.results);
        console.log(data.results);
      });
  }, [query]);
  return (
    <main className="searchPage movieRows__container">
      <section>
        <input
          className="searchPage__searchBar"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Title, character or genre"
        />
        <div className="searchPage__gallery">
          <div className="searchPage__container">
            {query != "" ? (
              searchResults.map((result) => (
                <MovieCard
                  id={result.id}
                  key={result.title}
                  poster={result.backdrop_path}
                  title={result.title}
                />
              ))
            ) : (
             null
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
