import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

// Initialise all global states
const AlertState = (props) => {
  const initialState = null;

  // UseReducer Hook to dispatch / trigger Reducer to change states
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Start of functions/actions declarations

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
  };

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
      }),
    5000
  );

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
