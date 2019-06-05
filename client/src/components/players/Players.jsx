import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/Player.css";

const Players = ({ players }) => {
  return (
    <div className="row Player-card mb-5">
      <div className="col-md-4 col-sm-12">
        <img
          className="img-fluid"
          src={
            players.picture
              ? players.picture
              : "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          }
          alt=""
          style={{ maxHeight: "300px" }}
        />
      </div>
      <div className="col-md-8 col-sm-12">
        <div className="card" style={{ maxHeight: "300px" }}>
          <div className="card-body">
            <div className="row">
              <div className="col-7">
                <h5 className="card-title text-center text-capitalize">
                  {players.name} {players.lastName}
                </h5>
              </div>
              <div className="col-5">
                <Link
                  className="btn btn-secondary"
                  to={`/player/${players._id}`}
                >
                  View Player
                </Link>
              </div>
            </div>

            <ul className="list-group">
              <li className="list-group-item">
                <strong>Postion:</strong> {players.position}
              </li>
              <li className="list-group-item">
                <strong>Number/Jersey:</strong> {players.number}
              </li>
              <li className="list-group-item">
                <strong>Size:</strong> {players.size}
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> {players.phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Players.prototypes = {
  players: PropTypes.array.isRequired
};

export default Players;
