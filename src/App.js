import React, { useState, useEffect, useMemo } from "react";
import Map from "./components/Map";
import Node from "./components/Node";
import { GlobalContext } from "./store/context";

import "./App.css";

const App = () => {
  const [animationDelay, setAnimationDelay] = useState(300);
  const [selectStart, setSelectStart] = useState(true);
  const [closedList, setClosedList] = useState([]);
  const [openList, setOpenList] = useState([]);
  const [startNode, setStartNode] = useState([0, 0]);
  const [destNode, setDestNode] = useState([99, 46]);
  const [path, setPath] = useState([]);
  const [grid, setGrid] = useState([[]]);

  return (
    <div className="App">
      <GlobalContext>
        <Map />
      </GlobalContext>
    </div>
  );
};

export default App;
