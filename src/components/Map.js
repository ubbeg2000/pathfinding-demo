import React, { useContext, useState } from "react";
import Node from "./Node";
import "./Map.css";
import { Context } from "../store/context";
import { CHANGE_DEST, CHANGE_START, CLEAR } from "../store/reducer";

const Map = () => {
  const [selectStart, setSelectStart] = useState(true);

  const { state, dispatch } = useContext(Context);

  return (
    <>
      <div className="grid-container">
        {state.grid.map((row) =>
          row.map((col) => (
            <Node
              handleClick={() =>
                dispatch({
                  type: selectStart ? CHANGE_START : CHANGE_DEST,
                  payload: { x: col.x, y: col.y },
                })
              }
              key={col.id}
              row={col.y}
              col={col.x}
              nodeState={col.nodeState}
            />
          ))
        )}
      </div>
      <button onClick={() => setSelectStart(!selectStart)}>
        Selecting {selectStart ? "start" : "dest"}
      </button>
      <button onClick={() => dispatch({ type: CLEAR })}>Clear</button>
    </>
  );
};

export default Map;
