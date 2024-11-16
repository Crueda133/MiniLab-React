// The Navbar component that displays the app’s name and logo.

import React from "react";
import logo from "../assets/tech.webp";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <h1 className="navbar-title">Tech Heaven</h1>
      </div>
      <ul className="navbar-list">{/* Navbar stuff here */}</ul>
    </nav>
  );
};
