import React, { useState, useMemo, useContext } from "react";
import styles from "./Map.module.css";
import Control from "./Control";
import NodeGrid from "./NodeGrid";
import { Context } from "../store/context";

const Map = () => {
  const { dispatch } = useContext(Context);
  const [speed, setSpeed] = useState(0);
  const [is8Way, setIs8Way] = useState(false);
  const [isAuto, setIsAuto] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);

  const GridMemo = useMemo(
    () => (
      <NodeGrid
        speed={speed}
        isAuto={isAuto}
        isAnimated={isAnimated}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        is8Way={is8Way}
      />
    ),
    [speed, isAuto, isAnimated, isStarted, setIsStarted, is8Way]
  );

  const ControlMemo = useMemo(
    () => (
      <Control
        speed={speed}
        setSpeed={setSpeed}
        isAuto={isAuto}
        setIsAuto={setIsAuto}
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        is8Way={is8Way}
        setIs8Way={setIs8Way}
        dispatch={dispatch}
      />
    ),
    [
      speed,
      setSpeed,
      isAuto,
      setIsAuto,
      isAnimated,
      setIsAnimated,
      isStarted,
      setIsStarted,
      is8Way,
      setIs8Way,
      dispatch,
    ]
  );

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["grid-container"]} draggable={false}>
          {GridMemo}
        </div>
        <div className={styles["control-container"]}>{ControlMemo}</div>
      </div>
    </>
  );
};

export default Map;
