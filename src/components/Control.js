import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Tabs,
  Tab,
  AppBar,
} from "@material-ui/core";
import { CallToAction, Help, Info } from "@material-ui/icons";
import styles from "./Control.module.css";
import {
  CHANGE_PATHFINDING_ALGORITHM,
  CHANGE_MAZE_ALGORITHM,
} from "../store/reducer";
import ControlsTab from "./ControlsTab";
import HelpTab from "./HelpTab";
import AboutTab from "./AboutTab";

const Control = ({
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
}) => {
  const [algorithm, setAlgorithm] = useState("BFS");
  const [maze, setMaze] = useState("simpleRandomMaze");
  const [page, setPage] = useState(0);

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
    dispatch({
      type: CHANGE_PATHFINDING_ALGORITHM,
      payload: e.target.value,
    });
  };

  const handleMazeChange = (e) => {
    dispatch({ type: "CLEAR" });
    setMaze(e.target.value);
    dispatch({
      type: CHANGE_MAZE_ALGORITHM,
      payload: e.target.value,
    });
  };

  const handleSpeedChange = (e, val) => {
    setSpeed(val);
  };

  const handlePageChange = (e, val) => {
    setPage(val);
  };

  return (
    <div>
      <Container maxWidth="lg" className={styles["container-style"]}>
        <Grid container>
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardHeader
                title={"Pathfinding Demo"}
                subheader="A visualization of pathfinding and maze-generating algorithms"
              />
              <AppBar position="static" color="white" elevation={0}>
                <Tabs value={page} onChange={handlePageChange}>
                  <Tab icon={<CallToAction />} label="controls" />
                  <Tab icon={<Help />} label="help" />
                  <Tab icon={<Info />} label="about" />
                </Tabs>
              </AppBar>
              <br />
              <CardContent>
                {page === 0 ? (
                  <ControlsTab
                    algorithm={algorithm}
                    handleAlgorithmChange={handleAlgorithmChange}
                    maze={maze}
                    handleMazeChange={handleMazeChange}
                    speed={speed}
                    handleSpeedChange={handleSpeedChange}
                    isStarted={isStarted}
                    setIsStarted={setIsStarted}
                    isAuto={isAuto}
                    setIsAuto={setIsAuto}
                    isAnimated={isAnimated}
                    setIsAnimated={setIsAnimated}
                    is8Way={is8Way}
                    setIs8Way={setIs8Way}
                    dispatch={dispatch}
                  />
                ) : page === 1 ? (
                  <HelpTab />
                ) : page === 2 ? (
                  <AboutTab />
                ) : null}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Control;
