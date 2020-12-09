import React from "react";
import SingleRow from "../SingleRow";
import requests from "../../requests";
import "./MoviesRows.css";
const MoviesRows = () => {
  return (
    <div class="moviesRows">
      <SingleRow title={"Disney Movies"} fetchUrl={requests.fetchDisney} />
      <SingleRow title={"Star Wars"} fetchUrl={requests.fetchStarWars} />
      <SingleRow title={"Pixar Movies"} fetchUrl={requests.fetchPixar} />
      <SingleRow title={"Action and Adventures"} fetchUrl={requests.fetchMarvel} />
      <SingleRow title={"The Simpsons"} fetchUrl={requests.fetchSimpsons} />
      <SingleRow title={"Musicales"} fetchUrl={requests.fetchMusicPixar} />
      <SingleRow title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default MoviesRows;
