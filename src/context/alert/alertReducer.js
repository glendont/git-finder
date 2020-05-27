import { SET_ALERT, REMOVE_ALERT } from "../types";

// A reducer is just a function that takes in a state and an action that changes the state
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};
