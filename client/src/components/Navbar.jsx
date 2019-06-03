import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        SogaTeam
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" data-toggle="collapse">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse">
            <NavLink className="nav-link" to="/add-player">
              Add Player
            </NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse">
            <NavLink className="nav-link" to="/players">
              All Players
            </NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse">
            <NavLink className="nav-link" to="/games">
              Games
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
