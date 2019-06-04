import React, { useState } from "react";
import "./teamStyles/Form.css";
import Axios from "axios";

const AddTeam = props => {
  const [name, setTeamName] = useState("");

  const nameHandler = e => {
    setTeamName({ ...name, [e.target.name]: e.target.value });
  };

  const submitForm = async e => {
    e.preventDefault();
    console.log(name);
    try {
      const res = await Axios.post(`/api/team/add-team`, name);
      const data = res.data;
      if (data) {
        props.history.push("/teams");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="mt-3">
      <form onSubmit={submitForm} className="formStyle pt-5">
        <div className="form-group">
          <label htmlFor="name"> Team Name </label>{" "}
          <input
            autoFocus
            type="text"
            placeholder="Enter Team's name"
            onChange={nameHandler}
            name="name"
            className="text-capitalize"
          />
        </div>

        <button type="submit" className="btn btn-block">
          Add Team
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
