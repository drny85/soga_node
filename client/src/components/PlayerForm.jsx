import React, { useState } from "react";
import axios from "axios";
const PlayerForm = () => {
  const [player, setPlayer] = useState({
    name: "",
    lastName: "",
    number: "",
    phone: "",
    email: ""
  });

  const setValue = event => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    const config = {
      headers: { "Content-type": "application/json" }
    };

    await axios
      .post("/api/player/add-player", player, config)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };
  return (
    <div>
      <h5 className="text-center pt-4">Add Player</h5>
      <form onSubmit={onSubmitHandler} className="mt-5 add_player_form">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              value={player.name}
              onChange={setValue}
              type="text"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              className="form-control"
              value={player.lastName}
              onChange={setValue}
              type="text"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="number">Number / Jersey</label>
            <input
              id="number"
              name="number"
              className="form-control"
              value={player.number}
              onChange={setValue}
              type="number"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              className="form-control"
              value={player.phone}
              onChange={setValue}
              type="text"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="form-control"
              value={player.email}
              onChange={setValue}
              type="text"
            />
          </div>
          <div className="submit_btn">
            <button className="btn btn-dark btn-block" type="submit">
              Add Player
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlayerForm;
