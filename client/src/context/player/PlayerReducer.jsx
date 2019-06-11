import {
  ADD_PLAYER,
  UPDATE_PLAYER,
  GET_PLAYER,
  GET_PLAYERS,
  REMOVE_PLAYER,
  SET_LOADING,
  REMOVE_LOADING
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: [...action.payload]
      };
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
