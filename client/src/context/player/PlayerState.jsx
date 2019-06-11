import React, { useReducer } from "react";
import PlayerContext from "./PlayerContext";
import playerReducer from "./PlayerReducer";
import axios from "axios";
import {
  ADD_PLAYER,
  UPDATE_PLAYER,
  GET_PLAYER,
  GET_PLAYERS,
  REMOVE_PLAYER,
  SET_LOADING,
  REMOVE_LOADING
} from "../../types";

const PlayerState = props => {
  const initialState = {
    players: [],
    player: null,
    loading: false
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  //ADD PLAYER
  const addPlayer = async player => {
    setLoading();
    try {
      const res = await axios.post("/api/player/add-player", player);
      dispatch({ type: ADD_PLAYER, payload: res.data });
      removeLoading();
    } catch (error) {
      console.log(error.response.data);
    }
  };
  //GET PLAYER
  const getPlayer = async id => {
    setLoading();
    try {
      const res = await axios.get(`/api/player/${id}`);
      dispatch({ type: GET_PLAYER, payload: res.data });
      removeLoading();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  //UPDATE PLAYER

  //REMOVE PLAYER

  //GET PLAYERS
  const getPlayers = async () => {
    try {
      setLoading();
      const res = await axios.get("/api/players");
      console.log("Data", res.data);
      dispatch({ type: GET_PLAYERS, payload: res.data });
      removeLoading();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // SET LOADING
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // REMOVE LOADING
  const removeLoading = () => {
    dispatch({ type: REMOVE_LOADING });
  };
  return (
    <PlayerContext.Provider
      value={{
        players: state.players,
        getPlayers,
        addPlayer,
        loading: state.loading,
        getPlayer
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
