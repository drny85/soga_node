import React, { useState } from "react";
import axios from "axios";
const PlayerForm = props => {
  const [player, setPlayer] = useState({
    name: "",
    lastName: "",
    number: "",
    phone: "",
    size: "",
    position: ""
  });

  // const [errors, setErrors] = useState({ name: "", msg: "" });
  const Errors = {};

  const setValue = event => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };

  const [alert, setAlert] = useState({});

  const onSubmitHandler = async e => {
    e.preventDefault();

    const config = {
      headers: { "Content-type": "application/json" }
    };

    await axios
      .post("/api/player/add-player", player, config)
      .then(res => props.history.push("/"))
      .catch(error => {
        if (error) {
          const errs = error.response.data;
          if (errs.errors) {
            errs.errors.forEach(e => {
              Errors[e.param] = e.msg;
            });
          } else {
            Errors["msg"] = errs.msg;
            setAlert(Errors);
          }

          setAlert(Errors);
          setTimeout(() => {
            setAlert({});
          }, 3000);
        }
      });
  };
  console.log(alert);
  return (
    <div>
      <h3 className="text-center pt-4">Add Player</h3>
      {alert.msg ? (
        <div
          style={{
            width: "70%",
            margin: "0 auto",
            textTransform: "capitalize"
          }}
          class="alert alert-danger text-center"
          role="alert"
        >
          {alert.msg}
        </div>
      ) : null}

      <form onSubmit={onSubmitHandler} className="mt-5 add_player_form">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              value={player.name}
              autoFocus
              onChange={setValue}
              placeholder="Name"
              type="text"
            />
            {alert.name ? <p className="text-danger">{alert.name}</p> : null}
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last name"
              className="form-control"
              value={player.lastName}
              onChange={setValue}
              type="text"
            />
            {alert.lastName ? (
              <p className="text-danger">{alert.lastName}</p>
            ) : null}
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="number">Number / Jersey</label>
            <input
              id="number"
              name="number"
              placeholder="Number / Jersey"
              className="form-control"
              value={player.number}
              onChange={setValue}
              min="0"
              max="99"
              type="number"
            />
            {alert.number ? (
              <p className="text-danger">{alert.number}</p>
            ) : null}
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="size">Size</label>
            <select
              className="form-control"
              name="size"
              id="size"
              placeholder="Size"
              value={player.size}
              onChange={setValue}
            >
              <option value="">Select a size</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
            {alert.size ? <p className="text-danger">{alert.size}</p> : null}
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="position">Position</label>
            <select
              className="form-control"
              name="position"
              placeholder="Position"
              id="posiiton"
              value={player.position}
              onChange={setValue}
            >
              <option value="">Select a position</option>
              <option value="p">P</option>
              <option value="c">C</option>
              <option value="1b">1B</option>
              <option value="2b">2B</option>
              <option value="3b">3B</option>
              <option value="ss">SS</option>
              <option value="lf">LF</option>
              <option value="cf">CF</option>
              <option value="rf">RF</option>
              <option value="dh">DH</option>
              <option value="ah">AH</option>
            </select>
            {alert.position ? (
              <p className="text-danger">{alert.position}</p>
            ) : null}
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              className="form-control"
              value={player.phone}
              onChange={setValue}
              placeholder="Phone"
              type="text"
            />
          </div>

          <button className="btn btn-dark btn-block" type="submit">
            Add Player
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlayerForm;
