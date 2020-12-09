import React from "react";
import ImageSlider from "../ImageSlider";
import Collections from "../Collections";
import MoviesRows from "../MoviesRows";
import "./Home.css";
const Home = () => {
  return (
    <main class="home">
      <ImageSlider />
      <div className="home__container movieRows__container">
        <Collections />
        <MoviesRows />
      </div>
    </main>
  );
};

export default Home;
