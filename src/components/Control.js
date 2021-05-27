import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  CardHeader,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Clear, Flag, RadioRounded, Refresh } from "@material-ui/icons";
import Node from "./Node";
import styles from "./Control.module.css";
import {
  CHANGE_DEST,
  CHANGE_START,
  CHANGE_VISITABLE_TRUE,
  CHANGE_VISITABLE_FALSE,
  CHANGE_ACTION,
  RESET,
  CHANGE_PATHFINDING_ALGORITHM,
  CHANGE_MAZE_ALGORITHM,
  GENERATE_MAZE,
} from "../store/reducer";

const Control = ({
  isAuto,
  setIsAuto,
  isAnimated,
  setIsAnimated,
  isStarted,
  setIsStarted,
  dispatch,
}) => {
  const [algorithm, setAlgorithm] = useState("BFS");
  const [maze, setMaze] = useState("simpleRandomMaze");

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

  return (
    <div>
      <Container maxWidth="lg" className={styles["container-style"]}>
        <Grid container>
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardHeader title={"Pathfinding Demo"} />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
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
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputLabel id="alg-label">
                          Select Maze Generator
                        </InputLabel>
                        <Select
                          labelId="alg-label"
                          fullWidth={true}
                          onChange={handleMazeChange}
                          value={maze}
                        >
                          <MenuItem value="emptyMaze">Empty Maze</MenuItem>
                          <MenuItem value="simpleRandomMaze">
                            Simple Random Maze
                          </MenuItem>
                          <MenuItem value="recursiveBacktrackMaze">
                            Recursize Backtrack Maze
                          </MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                    <Grid container>
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
                          onChange={() =>
                            setIsAnimated(isAuto ? false : !isAnimated)
                          }
                          disabled={isAuto}
                        />
                        <br />
                        <FormControlLabel
                          control={<Switch color="primary" />}
                          label="Auto Solve"
                          checked={isAuto}
                          onChange={() => setIsAuto(!isAuto)}
                        />
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
                          <Typography
                            variant="body1"
                            style={{ paddingLeft: "1rem" }}
                          >
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
                          <Typography
                            variant="body1"
                            style={{ paddingLeft: "1rem" }}
                          >
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
                          <Typography
                            variant="body1"
                            style={{ paddingLeft: "1rem" }}
                          >
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
                          <Typography
                            variant="body1"
                            style={{ paddingLeft: "1rem" }}
                          >
                            Unvisitable Node
                          </Typography>
                        </div>
                        <div className={styles["node-info"]}>
                          <Node nodeState={{ isVisited: true }} />
                          <Typography
                            variant="body1"
                            style={{ paddingLeft: "1rem" }}
                          >
                            Visited Node
                          </Typography>
                        </div>
                        <div className={styles["node-info"]}>
                          <Node nodeState={{ isPath: true }} />
                          <Typography
                            variant="body1"
                            style={{ paddingLeft: "1rem" }}
                          >
                            Path Node
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Control;
