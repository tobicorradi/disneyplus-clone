import React from "react";
import SingleRow from "../SingleRow";
import requests from "../../requests";
import "./MoviesRows.css";
const MoviesRows = () => {
  return (
    <section className="moviesRows">
      <SingleRow title={"Continue Watching"} fetchUrl={requests.fetchRandom} watching={true}/>
      <SingleRow title={"Disney Movies"} fetchUrl={requests.fetchDisney}  watching={false}/>
      <SingleRow title={"Star Wars"} fetchUrl={requests.fetchStarWars}  watching={false}/>
      <SingleRow title={"Pixar Movies"} fetchUrl={requests.fetchPixar}  watching={false}/>
      <SingleRow title={"Action and Adventures"} fetchUrl={requests.fetchMarvel}  watching={false}/>
      <SingleRow title={"The Simpsons"} fetchUrl={requests.fetchSimpsons}  watching={false}/>
      <SingleRow title={"Musicales"} fetchUrl={requests.fetchMusicPixar}  watching={false}/>
      <SingleRow title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}
       watching={false}/>
    </section>
  );
};

export default MoviesRows;
