import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Game = ({ game }) => {
  return (
    <div className="container mb-5">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>
                <Link to={`/game/${game._id}`} className="btn btn-secondary">
                  View Game
                </Link>
              </th>
              <th colSpan="4" className="text-center text-capitalize">
                Location: {game ? game.location : null}
              </th>
              <th colSpan="4" className="text-right">
                Date:
                <span>
                  {game ? (
                    <Moment format="MM/DD/YYYY">{game.gameDate}</Moment>
                  ) : null}
                </span>
              </th>
            </tr>
            <tr className="table-active">
              <th>Teams</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th className="table-dark">R</th>
              <th className="table-dark">H</th>
              <th className="table-dark">E</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>AWAY</th>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>

              <th>10</th>
              <th>8</th>
              <th>2</th>
            </tr>
            <tr>
              <th>SOGA</th>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>0</td>

              <th>3</th>
              <th>5</th>
              <th>5</th>
            </tr>
          </tbody>
          <tfoot>
            <tr />
          </tfoot>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default Game;
