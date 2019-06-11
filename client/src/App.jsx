import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Player from "./components/players/Player";
import PlayerForm from "./components/players/PlayerForm";
import AllPlayers from "./components/players/AllPlayers";
import Games from "./components/games/Games";
import UpdatePlayerForm from "./components/players/UpdatePlayerForm";
import Teams from "./components/Teams/Teams";
import AddTeam from "./components/Teams/AddTeam";
import AddGame from "./components/games/AddGame";
import GameDetails from "./components/games/GameDetails";
import PlayerState from "./context/player/PlayerState";
import Spinner from "./components/Spinner";
import GameSetup from "./components/games/GameSetup";
import TeamDetails from "./components/Teams/TeamDetails";

function App() {
  return (
    <PlayerState>
      <Router>
        <Switch>
          <Fragment>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/add-player" component={PlayerForm} />
              <Route exact path="/edit/:id" component={UpdatePlayerForm} />
              <Route path="/games" component={Games} />
              <Route path="/game/:id" component={GameDetails} />
              <Route path="/player/:id" component={Player} />
              <Route path="/game-setup/:id" component={GameSetup} />
              <Route path="/team/:id" component={TeamDetails} />
              <Route path="/teams" component={Teams} />
              <Route path="/loading" component={Spinner} />
              <Route path="/add-team" component={AddTeam} />
              <Route path="/players" component={AllPlayers} />
              <Route path="/new-game" component={AddGame} />
            </div>
          </Fragment>
        </Switch>
      </Router>
    </PlayerState>
  );
}

export default App;
