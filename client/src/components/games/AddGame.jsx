import React, { useState } from "react";
import Axios from "axios";

const AddGame = props => {
  const [game, setGame] = useState({
    gameDate: "",
    location: ""
  });
  const addGameHandler = e => {
    e.preventDefault();
    Axios.post("/api/game/new-game", game)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => console.log(error.response.data));
  };

  const formDataHandler = e => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };
  return (
    <div className="card mt-2">
      <div className="card-title">
        <h3 className="text-center mt-5">Start New Game</h3>
      </div>
      <div className="card-body">
        <form onSubmit={addGameHandler}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              onChange={formDataHandler}
              name="gameDate"
              id="date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              onChange={formDataHandler}
              name="location"
              id="location"
            />
          </div>
          <button className="btn btn-dark" type="submit">
            Add Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
