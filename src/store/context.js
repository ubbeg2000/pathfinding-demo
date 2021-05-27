import React, { createContext, useReducer, useCallback } from "react";
import { INITIAL_STATE } from "./initialState";
import { reducer } from "./reducer";

export const Context = createContext(null);

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...INITIAL_STATE });

  const dispatchCallback = useCallback((action) => {
    dispatch(action);
  }, []);

  return (
    <Context.Provider value={{ state: state, dispatch: dispatchCallback }}>
      {children}
    </Context.Provider>
  );
};
