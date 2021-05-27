import React, { useContext, useEffect } from "react";
import { MemoizedNode } from "./Node";
import { Context } from "../store/context";
import {
  CHANGE_DEST,
  CHANGE_START,
  CHANGE_VISITABLE_TRUE,
  CHANGE_VISITABLE_FALSE,
  CHANGE_VISITED_TRUE,
  CHANGE_PATH_TRUE,
  RESET,
} from "../store/reducer";
import { reconstructPath } from "../functions/helper";

const NodeGrid = ({
  isAuto,
  setIsAuto,
  isAnimated,
  setIsAnimated,
  isStarted,
  setIsStarted,
}) => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (isStarted || isAuto) {
      dispatch({ type: RESET });
      let closed = [];
      let open = [];
      let path = [];

      state.pathfindingAlgorithm(
        state.start,
        state.dest,
        state.grid,
        open,
        closed
      );

      path = reconstructPath(closed);

      if (isAnimated && !isAuto) {
        for (let i = 0; i < closed.length; i++) {
          setTimeout(
            () =>
              dispatch({
                type: CHANGE_VISITED_TRUE,
                payload: { x: closed[i].x, y: closed[i].y },
              }),
            10
          );
        }
        for (let i = 0; i < path.length; i++) {
          setTimeout(
            () =>
              dispatch({
                type: CHANGE_PATH_TRUE,
                payload: { x: path[i].x, y: path[i].y },
              }),
            10
          );
        }
        setTimeout(
          () => setIsStarted(false),
          10 * (closed.length + path.length)
        );
      } else {
        for (let i = 0; i < closed.length; i++) {
          dispatch({
            type: CHANGE_VISITED_TRUE,
            payload: { x: closed[i].x, y: closed[i].y },
          });
        }
        for (let i = 0; i < path.length; i++) {
          dispatch({
            type: CHANGE_PATH_TRUE,
            payload: { x: path[i].x, y: path[i].y },
          });
        }
        setIsStarted(false);
      }
    }
  }, [isStarted, isAnimated, isAuto, state.dest, state.start]);

  const handleClick = (x, y) => {
    if (state.action === CHANGE_DEST || state.action === CHANGE_START)
      dispatch({
        type: state.action,
        payload: { x, y },
      });
  };

  const handleMouseDown = (x, y) => {
    if (state.action === CHANGE_VISITABLE_TRUE) {
      dispatch({
        type: state.action,
        payload: { x, y, visitable: true },
      });
    } else if (state.action === CHANGE_VISITABLE_FALSE) {
      dispatch({
        type: state.action,
        payload: { x, y, visitable: false },
      });
    }
  };

  return (
    <>
      {state.grid.map((row) =>
        row.map((col) => (
          <MemoizedNode
            handleClick={() => handleClick(col.x, col.y)}
            handleMouseDown={() => handleMouseDown(col.x, col.y)}
            key={col.id}
            nodeState={col.nodeState}
          />
        ))
      )}
    </>
  );
};

export default NodeGrid;
