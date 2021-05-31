import React, { useState } from "react";
import { Grid, Tab, Tabs, Typography } from "@material-ui/core";
import mazeGenerationImage from "../assets/mazes.gif";
import eightWayImage from "../assets/8way.gif";
import bfsImage from "../assets/bfs.gif";
import actionsImage from "../assets/actions.gif";
import optionsImage from "../assets/options.gif";

const HelpTab = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (e, val) => {
    setTab(val);
  };

  return (
    <Grid container spacing={3} style={{ maxHeight: "70vh", overflow: "auto" }}>
      <Grid item xs={12}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Intro" />
          <Tab label="Selections" />
          <Tab label="Actions" />
          <Tab label="Options" />
        </Tabs>
      </Grid>
      {tab === 0 ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h5">A Quick Intro</Typography>
            <br />
            <Typography variant="body1">
              That big blue grid you see is called the map. It consists of 400
              squares called "nodes" which are subdivided into 6 categories
              which are:
            </Typography>
            <ol>
              <Typography component="li" variant="body1">
                Start Node, the node you came from
              </Typography>
              <Typography component="li" variant="body1">
                Destination Node, the node you want to go to
              </Typography>
              <Typography component="li" variant="body1">
                Unvisited Node, nodes that can be visited
              </Typography>
              <Typography component="li" variant="body1">
                Unvisitedable Node, nodes that cannot be visited
              </Typography>
              <Typography component="li" variant="body1">
                Visited Node, nodes that are visited by the algorithm when
                searching for the path
              </Typography>
              <Typography component="li" variant="body1">
                Path Node, nodes that shows you the path found by the algorithm
              </Typography>
            </ol>
            <Typography variant="body1">
              To get started quickly, the author suggest that you generate a
              maze first by clicking the "Maze" button and starting the
              visualization by clicking the "Start" button
            </Typography>
          </Grid>
        </>
      ) : tab === 1 ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h5">Selctions You Can Pick</Typography>
          </Grid>
          <br />
          <Grid item xs={12} sm={3}>
            <img src={mazeGenerationImage} width="100%" />
            <Typography component="em" variant="caption">
              Fig. 2.1 Maze generation in action
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h6">Maze Generation</Typography>
            <Typography variant="body1">
              You can edit the map manually by clicking the node you want to
              add/change in the "Legend" and then clicking on the map itself.
              You can also generate a map by selecting the maze generation
              algorithm and clicking the "Maze" button on the controls panel.
              Each time you change the maze generation algorithm or click the
              maze "Button", a new maze will be generated on the map. Each maze
              generation algorithm will generate a map with a distinct
              characteristic.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <img src={bfsImage} width="100%" />
            <Typography component="em" variant="caption">
              Fig. 2.3 Breadth First Search in action
            </Typography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Typography variant="h6">Pathfinding Algorithms Option</Typography>
            <Typography variant="body1">
              There are many ways to find a path between two points each with
              it's own pros and cons. You can choose how you want to find said
              path by choosing which algorithm you are to use in the controls
              panel. By default, Breadth First Seach is chosen, but feel free to
              explore the other algorithms at your disposal. If a path from the
              start node to the destination node is found, you will see some
              nodes turn to green to indicate said found path.
            </Typography>
          </Grid>
        </>
      ) : tab === 2 ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h5">Actions You Can Take</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <img src={actionsImage} width="100%" />
            <br />
            <Typography variant="caption">Fig 2.4 Choosing action</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">
              There are four main actions you can take which are "Start",
              "Reset", "Maze", and "Clear". If animation is enabled, you cannot
              take any action until the visualization is over.
            </Typography>
            <ol>
              <Typography component="li" variant="body1">
                "Start" action is taken when you want to start the
                visualization.
              </Typography>
              <Typography component="li" variant="body1">
                "Reset" action is taken when you want to clear the visited and
                path nodes.
              </Typography>
              <Typography component="li" variant="body1">
                "Maze" action is taken when you want to generate a new maze on
                the map.
              </Typography>
              <Typography component="li" variant="body1">
                "Clear" action is taken when you want to have an empty map
                again.
              </Typography>
            </ol>
          </Grid>
        </>
      ) : tab === 3 ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h5">Options You Can Set</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <img src={optionsImage} width="100%" />
            <br />
            <Typography variant="caption">Fig 2.5 Setting action</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">
              There are three options that you can set to your liking. The
              "Enable Animation" option is pretty self explanatory. The "Auto
              Solve" option, when enabled, will solve the map automatically
              whenever you make changes to either the algorithm choice, maze
              generator choice, or the map content. The "8 Way Movement" option
              allows the algorithm to take a diagonal path when doing its job.
              Note that "Enable Animation" is automatically set to disabled when
              "Auto Solve" is enabled.
            </Typography>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default HelpTab;
