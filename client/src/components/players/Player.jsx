import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Player = ({ match, history }) => {
  const [player, setPlayer] = useState({
    name: "",
    lastName: "",
    number: "",
    phone: "",
    size: "",
    position: "",
    team: { name: "" }
  });

  console.log(player);

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

  const handleDelete = async e => {
    try {
      await axios.delete(`/api/player/delete/${player._id}`);
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div style={{ marginTop: 20 }}>
      <div className="card mb-5">
        <div className="mt-3 ml-3">
          <Link className="btn btn-dark mr-2" to={`/edit/${player._id}`}>
            Edit Player
          </Link>
          <button
            className="btn btn-danger"
            onClick={e => {
              if (
                window.confirm("Are you sure you wish to delete this player?")
              )
                handleDelete(e);
            }}
          >
            Delete Player
          </button>
        </div>
        <br />
        <img
          className="card-img-top pt-5"
          style={{ maxHeight: "50vh" }}
          src={player.picture ? player.picture : "/images/avatar.png"}
          alt=""
        />
        <div className="card-body" style={{ minHeight: "30vh" }}>
          <h2 className="card-title text-capitalize text-center">
            {player.name} {player.lastName}
          </h2>
          <div className="player_data">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Avg</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>Singles</th>
                    <th>Doubles</th>
                    <th>Triples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{player.avg}</td>
                    <td>{player.hr}</td>
                    <td>{player.rbi}</td>
                    <td>{player.single}</td>
                    <td>{player.double}</td>
                    <td>{player.triple}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="2">Team</th>
                    <th colSpan="2">Position</th>
                    <th colSpan="2">Number</th>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-capitalize">
                      {player.team ? player.team.name : "No team assigned"}
                    </td>
                    <td colSpan="2" className="text-uppercase">
                      {player.position}
                    </td>
                    <td colSpan="2">{player.number}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
