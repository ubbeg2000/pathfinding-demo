import React from "react";

import {
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControlLabel,
  Switch,
  Slider,
} from "@material-ui/core";
import { Clear, Flag, RadioRounded, Refresh } from "@material-ui/icons";
import Node from "./Node";
import styles from "./ControlsTab.module.css";
import {
  CHANGE_DEST,
  CHANGE_START,
  CHANGE_VISITABLE_TRUE,
  CHANGE_VISITABLE_FALSE,
  CHANGE_ACTION,
  RESET,
  GENERATE_MAZE,
} from "../store/reducer";

const ControlsTab = ({
  algorithm,
  handleAlgorithmChange,
  maze,
  handleMazeChange,
  speed,
  handleSpeedChange,
  isStarted,
  setIsStarted,
  isAuto,
  setIsAuto,
  isAnimated,
  setIsAnimated,
  is8Way,
  setIs8Way,
  dispatch,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <InputLabel id="alg-label">Select Algorithm</InputLabel>
        <Select
          labelId="alg-label"
          value={algorithm}
          fullWidth={true}
          onChange={handleAlgorithmChange}
        >
          <MenuItem value="BFS">Breadth First Search</MenuItem>
          <MenuItem value="DFS">Depth First Search</MenuItem>
          <MenuItem value="ManhattanAstar">A* Algorithm (Manhattan)</MenuItem>
          <MenuItem value="PythagoreanAstar">
            A* Algorithm (Pythagorean)
          </MenuItem>
          <MenuItem value="Dijkstra">Dijkstra's Algorithm</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel id="alg-label">Select Maze Generator</InputLabel>
        <Select
          labelId="alg-label"
          fullWidth={true}
          onChange={handleMazeChange}
          value={maze}
        >
          <MenuItem value="emptyMaze">Empty Maze</MenuItem>
          <MenuItem value="simpleRandomMaze">Simple Random Maze</MenuItem>
          <MenuItem value="recursiveBacktrackMaze">
            Recursive Backtrack Maze
          </MenuItem>
          <MenuItem value="recursiveDivisionMaze">
            Recursive Division Maze
          </MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h5"
          style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
        >
          Actions
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Flag />}
          onClick={() => setIsStarted(true)}
          disabled={isStarted}
        >
          Start
        </Button>
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={() => dispatch({ type: RESET })}
          disabled={isStarted}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          startIcon={<RadioRounded />}
          onClick={() => dispatch({ type: GENERATE_MAZE })}
          disabled={isStarted}
        >
          Maze
        </Button>
        <Button
          variant="outlined"
          startIcon={<Clear />}
          onClick={() => dispatch({ type: "CLEAR" })}
          disabled={isStarted}
        >
          Clear
        </Button>
        <Typography
          variant="h5"
          style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
        >
          Options
        </Typography>
        <FormControlLabel
          control={<Switch color="primary" />}
          label="Enable Animation"
          checked={isAuto ? false : isAnimated}
          onChange={() => setIsAnimated(isAuto ? false : !isAnimated)}
          disabled={isAuto}
        />
        <br />
        <FormControlLabel
          control={<Switch color="primary" />}
          label="Auto Solve"
          checked={isAuto}
          onChange={() => setIsAuto(!isAuto)}
        />
        <br />
        <FormControlLabel
          control={<Switch color="primary" />}
          label="8 Way Movement"
          checked={is8Way}
          onChange={() => setIs8Way(!is8Way)}
        />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} style={{ paddingLeft: "2rem" }}>
            <br />
            <Typography>Animation Speed</Typography>
            <Slider
              disabled={isStarted || !isAnimated || isAuto}
              value={speed}
              onChange={handleSpeedChange}
              step={1}
              min={-2}
              max={2}
              marks={[
                {
                  value: -2,
                  label: "0.03s",
                },
                {
                  value: -1,
                  label: "0.05s",
                },
                {
                  value: 0,
                  label: "0.1s",
                },
                {
                  value: 1,
                  label: "0.2s",
                },
                {
                  value: 2,
                  label: "0.4s",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h5" style={{ paddingTop: "2rem" }}>
          Legend
        </Typography>
        <div
          className={styles["node-info"]}
          onClick={() =>
            dispatch({
              type: CHANGE_ACTION,
              payload: CHANGE_START,
            })
          }
        >
          <Node nodeState={{ isStart: true }} />
          <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
            Start Node
          </Typography>
        </div>
        <div
          className={styles["node-info"]}
          onClick={() =>
            dispatch({
              type: CHANGE_ACTION,
              payload: CHANGE_DEST,
            })
          }
        >
          <Node nodeState={{ isEnd: true }} />
          <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
            Destination Node
          </Typography>
        </div>
        <div
          className={styles["node-info"]}
          onClick={() =>
            dispatch({
              type: CHANGE_ACTION,
              payload: CHANGE_VISITABLE_TRUE,
            })
          }
        >
          <Node nodeState={{ isVisitable: true }} />
          <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
            Unvisited Node
          </Typography>
        </div>
        <div
          className={styles["node-info"]}
          onClick={() =>
            dispatch({
              type: CHANGE_ACTION,
              payload: CHANGE_VISITABLE_FALSE,
            })
          }
        >
          <Node nodeState={{ isVisitable: false }} />
          <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
            Unvisitable Node
          </Typography>
        </div>
        <div className={styles["node-info"]}>
          <Node nodeState={{ isVisited: true }} />
          <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
            Visited Node
          </Typography>
        </div>
        <div className={styles["node-info"]}>
          <Node nodeState={{ isPath: true }} />
          <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
            Path Node
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default ControlsTab;
