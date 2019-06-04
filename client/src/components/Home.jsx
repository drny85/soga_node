import React, { useEffect, useState } from "react";
import axios from "axios";
import Players from "./players/Players";

const Home = () => {
  const [players, setplayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    try {
      const res = await axios.get("/api/players");
      const data = res.data;
      setplayers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="h3 text-center p-5">Welcome to SogaTeam {}</div>
      {players.map((player, i) => (
        <Players key={i} players={player} />
      ))}
    </div>
  );
};

export default Home;
