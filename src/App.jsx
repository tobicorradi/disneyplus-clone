import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import BrandPage from "./components/BrandPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/brand/:brand">
            <Header className="headerTransparent" />
            <BrandPage />
          </Route>
          <Route path="/play/:movieId">
            <Header className="headerTransparent" />
            <DetailPage />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
