import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const TeamDetails = ({ match }) => {
  const { id } = match.params;
  const [team, setTeam] = useState({
    name: "",
    players: []
  });

  useEffect(() => {
    if (id) {
      Axios.get(`/api/team/${id}`)
        .then(res => {
          if (res.data) {
            setTeam(res.data);
          }
        })
        .catch(error => console.log(error.response.data));
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card title">
          <h4 className="text-center m-3 text-capitalize">{team.name}</h4>
          <div className="card body">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {team.players.map((player, index) => {
                  return (
                    <ul
                      key={player._id}
                      className="list-group list-group-flush"
                    >
                      <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize">
                        {index + 1} . {player.name} {player.lastName}
                        <span className="badge badge-pill">
                          <Link
                            to={`/player/${player._id}`}
                            className="btn btn-secondary"
                          >
                            View Player
                          </Link>
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="col-sm-12 col-md-6">
                <h4 className="text-center">{team.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
