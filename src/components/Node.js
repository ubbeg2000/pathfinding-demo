import React, { useState, useEffect, useRef } from "react";
import "./Node.css";

const Node = ({ row, col, handleClick, nodeState }) => {
  const [color, setColor] = useState("#dbe8ff");

  useEffect(() => {
    if (nodeState.isEnd) {
      setColor("#00ff00");
    } else if (nodeState.isStart) {
      setColor("#ff0000");
    } else {
      setColor("#dbe8ff");
    }
  }, [nodeState.isEnd, nodeState.isStart]);

  return (
    <div
      className="grid-item"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Node;
