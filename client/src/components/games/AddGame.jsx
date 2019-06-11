import React, { useState, useEffect } from "react";
import Axios from "axios";

const AddGame = props => {
  const [teams, setTeams] = useState([]);
  const [game, setGame] = useState({
    gameDate: "",
    location: "",
    away: "",
    home: ""
  });
  useEffect(() => {
    Axios.get("/api/teams")
      .then(res => {
        console.log(res.data);
        setTeams(res.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);
  const addGameHandler = e => {
    e.preventDefault();
    Axios.post("/api/game/new-game", game)
      .then(res => {
        if (res.data) {
          props.history.push("/games");
        }
      })
      .catch(error => console.log(error.response.data));
  };

  const formDataHandler = e => {
    setGame({ ...game, [e.target.name]: e.target.value });
    console.log(game);
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
            <label htmlFor="location">Away</label>
            <select
              className="form-control text-capitalize"
              onChange={formDataHandler}
              name="away"
              id="away"
            >
              <option value="">Select Away Team</option>
              {teams.map(team => {
                return (
                  <option key={team._id} value={team._id}>
                    {team.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="home">Home</label>
            <select
              className="form-control text-capitalize"
              onChange={formDataHandler}
              name="home"
              id="home"
            >
              <option value="">Select Home Team</option>
              {teams.map(team => {
                return (
                  <option key={team._id} value={team._id}>
                    {team.name}
                  </option>
                );
              })}
            </select>
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
