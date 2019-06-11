import React, { useEffect, useState } from "react";
import Axios from "axios";

const GameSetup = ({ match, history }) => {
  const [game, setGame] = useState({});

  useEffect(() => {
    Axios.get(`/api/game/detail/${match.params.id}`)
      .then(res => {
        console.log(res.data);
        setGame(res.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, [match.params.id]);
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-title">
          <h4 className="text-center m-3">Game Setup</h4>
        </div>
      </div>
    </div>
  );
};

export default GameSetup;
