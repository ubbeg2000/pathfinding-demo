import { CHANGE_START } from "./reducer";
import { PATHFINDING_ALGORITHMS, MAZE_ALGORITHMS } from "../functions";

let initialGrid = [];

for (let i = 0; i < 20; i++) {
  initialGrid = [...initialGrid, []];
  for (let j = 0; j < 20; j++) {
    initialGrid[i] = [
      ...initialGrid[i],
      {
        id: i * 20 + j,
        x: j,
        y: i,
        nodeState: {
          x: j,
          y: i,
          isPath: false,
          isVisited: false,
          isVisitable: true,
          isStart: i === 0 && j === 0,
          isEnd: i === 19 && j === 19,
        },
      },
    ];
  }
}

export const INITIAL_STATE = {
  grid: initialGrid,
  start: {
    x: 0,
    y: 0,
  },
  dest: {
    x: 19,
    y: 19,
  },
  action: CHANGE_START,
  pathfindingAlgorithm: PATHFINDING_ALGORITHMS.BFS,
  mazeAlgorithm: MAZE_ALGORITHMS.simpleRandomMaze,
};
