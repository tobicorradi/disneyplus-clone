import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import SingleRow from "../SingleRow";
import requests from "../../requests";
import "./BrandPage.css";
const BrandPage = (props) => {
  const brand = props.match.params.brand;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="brandPage">
      <div className="brandPage__background">
        <img alt="" src={`/images/brands/${brand}-bg.jpg`} />
      </div>
      <div className="brandPage__image">
        {brand !== "pixar" ? (
          <img src={`/images/brands/${brand}.png`} alt="" />
        ) : null}
      </div>
      <div className="brandPage__movies movieRows__container">
        {brand === "marvel" ? (
          <>
            <SingleRow
              title="Marvel Universe"
              fetchUrl={requests.fetchMarvelPhases}
            />
            <SingleRow
              title="Marvel Universe: Phase One"
              fetchUrl={requests.fetchMarvelPhaseOne}
            />
            <SingleRow
              title="Marvel Universe: Phase Two"
              fetchUrl={requests.fetchMarvelPhaseTwo}
            />
            <SingleRow
              title="Marvel Universe: Phase Three"
              fetchUrl={requests.fetchMarvelPhaseThree}
            />
          </>
        ) : null}
        {brand === "pixar" ? (
          <>
            <SingleRow
              title="Pixar Movies"
              fetchUrl={requests.fetchPixar}
            ></SingleRow>
            <SingleRow
              title="Toy Story Collection"
              fetchUrl={requests.fetchToyStory}
            ></SingleRow>
            <SingleRow
              title="Cars Collection"
              fetchUrl={requests.fetchCars}
            ></SingleRow>
            <SingleRow
              title="Unexpected Heroes"
              fetchUrl={requests.fetchUnexpectedHeroes}
            ></SingleRow>
          </>
        ) : null}
        {brand === "star-wars" ? (
          <>
            <SingleRow
              title="Star Wars Collection"
              fetchUrl={requests.fetchStarWars}
            ></SingleRow>
            <SingleRow
              title="Star Wars Lego"
              fetchUrl={requests.fetchStarWarsLego}
            ></SingleRow>
          </>
        ) : null}
        {brand === "disney" ? (
          <>
            <SingleRow
              title="Disney Originals"
              fetchUrl={requests.fetchDisney}
            ></SingleRow>
            <SingleRow
              title="Classics"
              fetchUrl={requests.fetchDisneyClassics}
            ></SingleRow>
            <SingleRow
              title="Series"
              fetchUrl={requests.fetchDisneySeries}
            ></SingleRow>
          </>
        ) : null}
        {brand === "national-geographic" ? (
          <>
            <SingleRow
              title="Movies"
              fetchUrl={requests.fetchNationalMovies}
            ></SingleRow>
          </>
        ) : null}
      </div>
    </main>
  );
};

export default withRouter(BrandPage);
