import React from "react";

const Game = () => {
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th colSpan="5" className="text-center">
                Game Summary
              </th>
              <th colSpan="4" className="text-right">
                Date: <span>06/02/2019</span>
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
    </div>
  );
};

export default Game;
