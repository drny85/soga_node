import React, { useEffect, useState } from "react";
import axios from "axios";

const Player = ({ match }) => {
  const [player, setPlayer] = useState({
    name: "",
    lastName: "",
    number: "",
    phone: "",
    size: "",
    position: ""
  });

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
  return (
    <div style={{ marginTop: 20 }}>
      <div className="card mb-5">
        <br />
        <img
          className="card-img-top pt-5"
          style={{ maxHeight: "50vh" }}
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
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
                    <th colSpan="3">Position</th>
                    <th colSpan="3">Number</th>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-uppercase">
                      {player.position}
                    </td>
                    <td colSpan="3">{player.number}</td>
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
