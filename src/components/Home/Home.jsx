import React from "react";
import ImageSlider from "../ImageSlider";
import Collections from "../Collections";
import MoviesRows from "../MoviesRows";
import "./Home.css";
const Home = () => {
  return (
    <main className="home">
      <div className="home__container movieRows__container">
        <ImageSlider />
        <Collections />
        <MoviesRows />
      </div>
    </main>
  );
};

export default Home;
