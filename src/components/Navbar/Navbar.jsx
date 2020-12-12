import React from "react";
import Logo from "./../Logo";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import StarIcon from "@material-ui/icons/Star";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import { Link, withRouter } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <MenuIcon className="navbar__menuIcon" />
      <Link to="/">
        <Logo />
      </Link>
      <ul className="navbar__list">
        <li className="navbar__buttonWrapper">
          <Button className="navbar__button" startIcon={<HomeIcon />}>
            Home
          </Button>
        </li>
        <li className="navbar__buttonWrapper">
          <Link to="/search">
            <Button className="navbar__button" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Link>
        </li>
        <li className="navbar__buttonWrapper">
          <Button className="navbar__button" startIcon={<AddIcon />}>
            Watchlist
          </Button>
        </li>
        <li className="navbar__buttonWrapper">
          <Button className="navbar__button" startIcon={<StarIcon />}>
            Originals
          </Button>
        </li>
        <li className="navbar__buttonWrapper">
          <Button className="navbar__button" startIcon={<MovieIcon />}>
            Movies
          </Button>
        </li>
        <li className="navbar__buttonWrapper">
          <Button className="navbar__button" startIcon={<TvIcon />}>
            Series
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
