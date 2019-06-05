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

  const [file, setFile] = useState("");

  const uploadImage = async e => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data", userId: player._id }
      });
      const data = res.data;
      setPlayer(data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

  const onChange = e => {
    setFile(e.target.files[0]);
  };

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
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Change Profile Picture
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <form>
                    <input
                      type="file"
                      name="file"
                      onChange={onChange}
                      id="file"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={uploadImage}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Change Picture
              </button>
            </div>
          </div>
        </div>
      </div>
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
          style={{ maxHeight: "600px" }}
          data-toggle="modal"
          data-target="#exampleModal"
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
