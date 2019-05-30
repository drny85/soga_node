import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Player = ({ match }) => {
  const [player, setPlayer] = useState({
    name: "",
    lastName: ""
  });

  useEffect(() => {
    axios
      .get(`/api/player/${match.params.id}`)
      .then(res => setPlayer(res.data))
      .catch(err => {
        if (err) {
          alert("No player found");
        }
      });
  }, [match.params.id]);
  return (
    <div className="card mb-3" style={{ maxWidth: 720 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://picsum.photos/id/500/600/600"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-capitalize">
              {player.name} {player.lastName}
            </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
