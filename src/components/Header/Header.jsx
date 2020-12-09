import React from "react";
import Navbar from "./../Navbar";
import UserSelector from "./../UserSelector";

import "./Header.css";
const Header = ({ className }) => {
  return (
    <header className={className}>
      <Navbar />
      <UserSelector />
    </header>
  );
};

export default Header;
