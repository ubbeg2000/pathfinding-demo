import React, { useState, useMemo, useContext } from "react";
import styles from "./Map.module.css";
import Control from "./Control";
import NodeGrid from "./NodeGrid";
import { Context } from "../store/context";

const Map = () => {
  console.log("P");
  const { dispatch } = useContext(Context);
  const [isAuto, setIsAuto] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);

  const GridMemo = useMemo(
    () => (
      <NodeGrid
        isAuto={isAuto}
        setIsAuto={setIsAuto}
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
      />
    ),
    [isAuto, setIsAuto, isAnimated, setIsAnimated, isStarted, setIsStarted]
  );

  const ControlMemo = useMemo(
    () => (
      <Control
        isAuto={isAuto}
        setIsAuto={setIsAuto}
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        dispatch={dispatch}
      />
    ),
    [
      isAuto,
      setIsAuto,
      isAnimated,
      setIsAnimated,
      isStarted,
      setIsStarted,
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
