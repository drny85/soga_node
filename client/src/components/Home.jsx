import React, { useEffect, useContext } from "react";
import Spinner from "../components/Spinner";
import Players from "./players/Players";
import playerContext from "../context/player/PlayerContext";

const Home = () => {
  // const [players, setplayers] = useState([]);
  const playerState = useContext(playerContext);
  const { getPlayers, players, loading } = playerState;

  useEffect(() => {
    getPlayers();

    //eslint-disable-next-line
  }, []);

  // const getPlayers = async () => {
  //   try {
  //     // const res = await axios.get("/api/players");
  //     // const data = res.data;
  //     // setplayers(data);
  //     playerState.getPlayers;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="mt-5">
        <div className="h3 text-center p-5">Welcome to SogaTeam {}</div>
        {players.map((player, i) => (
          <Players key={i} player={player} loading={loading} />
        ))}
      </div>
    );
  }
};

export default Home;
