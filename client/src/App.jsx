import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Player from "./components/players/Player";
import PlayerForm from "./components/players/PlayerForm";
import AllPlayers from "./components/players/AllPlayers";
import Games from "./components/Games";
import UpdatePlayerForm from "./components/players/UpdatePlayerForm";
import Teams from "./components/Teams/Teams";
import AddTeam from "./components/Teams/AddTeam";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/add-player" component={PlayerForm} />
          <Route exact path="/edit/:id" component={UpdatePlayerForm} />
          <Route path="/games" component={Games} />
          <Route path="/player/:id" component={Player} />
          <Route path="/teams" component={Teams} />
          <Route path="/add-team" component={AddTeam} />
          <Route path="/players" component={AllPlayers} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
