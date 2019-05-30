import React, { useEffect, useState } from "react";
import axios from "axios";
import Players from "./Players";
import PlayerForm from "./PlayerForm";
const Home = () => {
  const [players, setplayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const res = await axios.get("/api/players");
    const data = res.data;
    setplayers(data);
  };

  return (
    <div className="mt-5">
      <PlayerForm />
      <div className="h3 text-center ">Welcome Home {}</div>
      {players.map((player, i) => (
        <Players key={i} players={player} />
      ))}
    </div>
  );
};

export default Home;
