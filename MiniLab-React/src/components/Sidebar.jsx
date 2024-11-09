// The Sidebar component with the links to the Home and About page.
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
};