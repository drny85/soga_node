import React from "react";
import { Link } from "react-router-dom";

const Team = ({ team }) => {
  return (
    <div className="team mb-5 p-2" style={{ width: "100%", height: "auto" }}>
      <div className="row col-12">
        <div className="col-md-4 col-sm-12">
          <img
            src="https://images.unsplash.com/photo-1545194445-1459d9fb0d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="card">
            <div className="card-title">
              <h3 className="text-center text-capitalize m-3">{team.name}</h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {team.manager ? (
                  <li className="list-group-item">
                    <strong>Manager:</strong> <span>{team.manager}</span>
                  </li>
                ) : null}
                <li className="list-group-item">
                  <strong className="mr-2">Team Description: </strong>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio pariatur obcaecati consequuntur laudantium porro
                  reprehenderit possimus delectus aperiam eius quod aut
                  consectetur voluptate sit consequatur illum exercitationem,
                  facere rerum dolores?
                </li>
                <li className="list-group-item">
                  <Link className="btn btn-dark" to={`/team/${team._id}`}>
                    View Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
