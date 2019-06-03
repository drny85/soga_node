import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
import AllPlayers from "./components/AllPlayers";
import Games from "./components/Games";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container App-background">
          <Route exact path="/" component={Home} />
          <Route path="/add-player" component={PlayerForm} />
          <Route exact path="/edit/:id" component={PlayerForm} />
          <Route path="/games" component={Games} />
          <Route path="/player/:id" component={Player} />
          <Route path="/players" component={AllPlayers} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
