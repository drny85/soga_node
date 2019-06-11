import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const GameDetails = ({ match }) => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    Axios.get("/api/game/detail/" + match.params.id)
      .then(g => {
        console.log(g.data);
        setGame(g.data);
      })
      .catch(error => console.log(error.response.data));
    //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h3 className="text-center mt-5">Game Details</h3>
      <div className="card">
        <div className="card-title">
          <div className="row">
            <div className="col-md-8">
              <h4 className="text-center card-title p-3 text-capitalize font-weight-bold">
                {game.teams ? game.teams[0].name : null} vs{" "}
                {game.teams ? game.teams[1].name : null}
              </h4>
            </div>
            <div className="col -md-4 p-3">
              <Link
                className="btn btn-dark float-right mr-3"
                to={`/game-setup/${game._id}`}
              >
                Game Setup
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul>
            <li className="text-capitalize">Location : {game.location}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
