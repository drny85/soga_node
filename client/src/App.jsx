import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
import AllPlayers from "./components/AllPlayers";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container App-background">
          <Route exact path="/" component={Home} />
          <Route exact path="/add-player" component={PlayerForm} />
          <Route path="/player/:id" component={Player} />
          <Route path="/players" component={AllPlayers} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
