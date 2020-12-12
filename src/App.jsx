import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import BrandPage from "./components/BrandPage";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/brand/:brand">
            <Header className="headerTransparent" />
            <BrandPage />
            <Footer />
          </Route>
          <Route path="/play/:movieId">
            <Header className="headerTransparent" />
            <DetailPage />
            <Footer />
          </Route>
          <Route path="/search">
            <Header />
            <SearchPage />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
