import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

let initialGrid = [];

for (let i = 0; i < 50; i++) {
  initialGrid = [...initialGrid, []];
  for (let j = 0; j < 20; j++) {
    initialGrid[i] = [
      ...initialGrid[i],
      {
        id: i * 50 + j,
        x: i,
        y: j,
        nodeState: {
          isVisited: false,
          isVisitable: true,
          isStart: i === 0 && j === 0,
          isEnd: i === 49 && j === 19,
        },
      },
    ];
  }
}

const initialState = {
  grid: initialGrid,
  start: {
    x: 0,
    y: 0,
  },
  dest: {
    x: 49,
    y: 19,
  },
};

export const Context = createContext(null);

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
