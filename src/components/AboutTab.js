import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import authorImage from "../assets/author.jpg";

const AboutTab = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper elevation={4}>
          <img src={authorImage} width="100%" />
        </Paper>
        <br />
        <Typography variant="caption" component="em">
          Figure 1.1 The author's face
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">A Little Bit of Something</Typography>
        <Typography variant="subtitle1">About this project...</Typography>
        <br />
        <Typography variant="body1">
          This project is dedicated in aiding the process of understanding{" "}
          <a href="https://en.wikipedia.org/wiki/Pathfinding">
            pathfinding algorithms
          </a>
          , both for the author and for you, by means of visualization. Crudely
          speaking, pathfinding algorithms are algorithms that searches for a
          path between two points (in this case the start node and the
          destination node). These pathfinding algorithms have found their uses
          in many fields such as navigation, search algorithms, game design etc.
          This project is written by the handsome young man in Figure 1.1 and is
          inspired by Clément Mihailescu's video which you can watch by clicking{" "}
          <a href="https://www.youtube.com/watch?v=n4t_-NjY_Sg&t=771s">
            this link.
          </a>{" "}
          The entire source code of this project are made public and can be
          found in{" "}
          <a href="https://github.com/ubbeg2000/pathfinding-demo/">
            this repository.
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutTab;
