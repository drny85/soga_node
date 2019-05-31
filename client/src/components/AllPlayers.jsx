import React, { useState, useEffect } from "react";
import axios from "axios";

const AllPlayers = () => {
  useEffect(() => {
    axios
      .get("/api/players")
      .then(pl => setplayer(pl.data))
      .catch(err => console.log(err.response.data));
  }, []);

  const [players, setplayer] = useState([]);

  return (
    <div className="container">
      <h4 className="text-center mt-3 p-3">All Players</h4>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Position</th>
              <th>Number</th>
              <th>Size</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => {
              return (
                <tr key={player._id}>
                  <td className="text-capitalize">
                    {player.name} {player.lastName}
                  </td>
                  <td className="text-uppercase">{player.position}</td>
                  <td>{player.number}</td>
                  <td className="text-capitalize">{player.size}</td>
                  <td>$35.00</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot />
        </table>
      </div>
    </div>
  );
};

export default AllPlayers;
