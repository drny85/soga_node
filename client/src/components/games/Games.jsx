import React, { useEffect, useState } from "react";
import Game from "./Game";
import { Link } from "react-router-dom";
import Axios from "axios";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    Axios.get("/api/game/games")
      .then(res => {
        setGames(res.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h3 className="text-center p-3 pt-2">Games</h3>
      <Link to="/new-game" className="btn btn-dark float-right m-2">
        New Game
      </Link>
      {games.map(game => {
        return <Game key={game._id} game={game} />;
      })}
    </div>
  );
};

export default Games;
