import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Player.css";

const Players = ({ players }) => {
  useEffect(() => {
    return () => {};
  }, [players]);
  return (
    <div className="card d-inline-flex  Player-card m-3">
      <img
        src="https://picsum.photos/id/1080/280/200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">
          {players.name} {players.lastName}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/player/${players._id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

Players.prototypes = {
  players: PropTypes.array.isRequired
};

export default Players;
