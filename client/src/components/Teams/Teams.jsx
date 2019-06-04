import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Team from "./Team";

const Teams = props => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    Axios.get(`/api/teams`)
      .then(res => setTeams(res.data))
      .catch(error => console.log(error.response.data));
  }, []);
  return (
    <div className="">
      <h3 className="text-center mt-3"> All Teams </h3>

      <Link className="btn btn-dark m-5 float-right" to="/add-team">
        Add Team
      </Link>
      <br />

      {teams.map(team => {
        return <Team key={team._id} team={team} />;
      })}
    </div>
  );
};

export default Teams;
