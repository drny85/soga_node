import React from "react";
import Game from "./Game";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-center p-3 pt-2">Games</h3>
      <Link to="/new-game" className="btn btn-dark float-right m-2">
        New Game
      </Link>
      <Game />
    </div>
  );
};

export default Games;
