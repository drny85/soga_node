import React, { useState } from "react";
const PlayerForm = () => {
  const [state, setState] = useState({
    name: "",
    lastName: ""
  });

  const setValue = e => {
    setState({ [e.target.name]: e.target.value });
  };
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
           
            onChange={e => setValue(e)}
            type="text"
          />
          {state.name}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            onChange={e => setValue(e)}
            type="text"
          />
          {state.lastName}
        </div>
      </div>
    </form>
  );
};

export default PlayerForm;
