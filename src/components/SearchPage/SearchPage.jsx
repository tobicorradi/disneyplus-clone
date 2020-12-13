import React from "react";
import MovieCard from "../MovieCard";
import { apiKey } from "../../utils";
import useSearch from "../../hooks/useSearch";
import "./SearchPage.css";

const SearchPage = () => {
  const { query, searchResults, setQuery } = useSearch(apiKey);
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
            {query
              ? searchResults.map((result) => (
                  <MovieCard
                    id={result.id}
                    key={result.id}
                    poster={result.backdrop_path}
                    title={result.title}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
