import React, { useState, useEffect } from "react";
import styles from "./Node.module.css";

const Node = ({ handleClick, handleMouseDown, nodeState }) => {
  const [nodeStyle, setNodeStyle] = useState("");

  useEffect(() => {
    if (nodeState.isEnd) {
      setNodeStyle(styles.dest);
    } else if (nodeState.isPath && !nodeState.isStart) {
      setNodeStyle(styles.path);
    } else if (nodeState.isVisited && !nodeState.isStart) {
      setNodeStyle(styles.visited);
    } else if (nodeState.isStart) {
      setNodeStyle(styles.start);
    } else if (!nodeState.isVisitable) {
      setNodeStyle(styles.unvisitable);
    } else {
      setNodeStyle(styles.base);
    }
  }, [
    nodeState.isStart,
    nodeState.isEnd,
    nodeState.isVisitable,
    nodeState.isVisited,
    nodeState.isPath,
  ]);

  return (
    <div
      draggable={false}
      className={nodeStyle}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    ></div>
  );
};

export const MemoizedNode = React.memo(Node);

export default Node;
