import { PATHFINDING_ALGORITHMS, MAZE_ALGORITHMS } from "../functions";

export const CHANGE_PATHFINDING_ALGORITHM = "CHANGE_PATHFINDING_ALGORITHM";
export const CHANGE_MAZE_ALGORITHM = "CHANGE_MAZE_ALGORITHM";
export const CHANGE_VISITABLE_FALSE = "CHANGE_VISITABLE_FALSE";
export const CHANGE_VISITABLE_TRUE = "CHANGE_VISITABLE_TRUE";
export const GENERATE_MAZE = "GENERATE_MAZE";
export const CHANGE_VISITED_FALSE = "CHANGE_VISITED_FALSE";
export const CHANGE_VISITED_TRUE = "CHANGE_VISITED_TRUE";
export const CHANGE_PATH_FALSE = "CHANGE_PATH_FALSE";
export const CHANGE_PATH_TRUE = "CHANGE_PATH_TRUE";
export const CHANGE_ACTION = "CHANGE_ACTION";
export const CHANGE_START = "CHANGE_START";
export const CHANGE_DEST = "CHANGE_DEST";
export const CLEAR = "CLEAR";
export const RESET = "RESET";

export const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case CHANGE_ACTION:
      newState.action = action.payload;
      break;
    case CHANGE_START:
      newState.grid[state.start.y][state.start.x].nodeState.isStart = false;
      newState.grid[action.payload.y][
        action.payload.x
      ].nodeState.isStart = true;
      newState.start = {
        x: action.payload.x,
        y: action.payload.y,
      };
      break;
    case CHANGE_DEST:
      newState.grid[state.dest.y][state.dest.x].nodeState.isEnd = false;
      newState.grid[action.payload.y][action.payload.x].nodeState.isEnd = true;
      newState.dest = {
        x: action.payload.x,
        y: action.payload.y,
      };
      break;
    case RESET:
      newState.grid = newState.grid.map((row) =>
        row.map((col) => ({
          ...col,
          nodeState: {
            ...col.nodeState,
            isVisited: false,
            isPath: false,
          },
        }))
      );
      break;
    case CLEAR:
      newState.grid[state.start.y][state.start.x].nodeState.isStart = false;
      newState.grid[state.dest.y][state.dest.x].nodeState.isEnd = false;
      newState.grid[0][0].nodeState.isStart = true;
      newState.grid[19][19].nodeState.isEnd = true;
      newState.start = { x: 0, y: 0 };
      newState.dest = { x: 19, y: 19 };
      newState.grid = newState.grid.map((row) =>
        row.map((col) => ({
          ...col,
          nodeState: {
            ...col.nodeState,
            isVisited: false,
            isVisitable: true,
            isPath: false,
          },
        }))
      );
      break;
    case CHANGE_VISITABLE_TRUE:
      newState.grid[action.payload.y][
        action.payload.x
      ].nodeState.isVisitable = true;
      break;
    case CHANGE_VISITABLE_FALSE:
      newState.grid[action.payload.y][
        action.payload.x
      ].nodeState.isVisitable = false;
      break;
    case CHANGE_VISITED_TRUE:
      newState.grid[action.payload.y][
        action.payload.x
      ].nodeState.isVisited = true;
      break;
    case CHANGE_VISITED_FALSE:
      newState.grid[action.payload.y][
        action.payload.x
      ].nodeState.isVisited = false;
      break;
    case CHANGE_PATH_TRUE:
      newState.grid[action.payload.y][action.payload.x].nodeState.isPath = true;
      break;
    case CHANGE_PATH_FALSE:
      newState.grid[action.payload.y][
        action.payload.x
      ].nodeState.isPath = false;
      break;
    case CHANGE_PATHFINDING_ALGORITHM:
      newState.pathfindingAlgorithm = PATHFINDING_ALGORITHMS[action.payload];
      break;
    case CHANGE_MAZE_ALGORITHM:
      newState.mazeAlgorithm = MAZE_ALGORITHMS[action.payload];
      newState.grid = newState.grid.map((row) =>
        row.map((col) => ({
          ...col,
          nodeState: {
            ...col.nodeState,
            isVisited: false,
            isVisitable: true,
            isPath: false,
          },
        }))
      );
      let maze = newState.mazeAlgorithm();
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          switch (maze[i][j]) {
            case "#":
              newState.grid[j][i].nodeState.isVisitable = false;
              break;
            case "*":
              newState.grid[j][i].nodeState.isVisitable = true;
              break;
            case "s":
              newState.grid[j][i].nodeState.isStart = true;
              newState.grid[newState.start.y][
                newState.start.x
              ].nodeState.isStart = false;
              newState.start = { x: i, y: j };
              break;
            case "d":
              newState.grid[j][i].nodeState.isEnd = true;
              newState.grid[newState.dest.y][
                newState.dest.x
              ].nodeState.isEnd = false;
              newState.dest = { x: i, y: j };
              break;
            default:
              break;
          }
        }
      }
      break;
    case GENERATE_MAZE:
      let newMaze = newState.mazeAlgorithm();
      newState.grid = newState.grid.map((row) =>
        row.map((col) => ({
          ...col,
          nodeState: {
            ...col.nodeState,
            isVisited: false,
            isVisitable: true,
            isPath: false,
          },
        }))
      );
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          switch (newMaze[i][j]) {
            case "#":
              newState.grid[j][i].nodeState.isVisitable = false;
              break;
            case "*":
              newState.grid[j][i].nodeState.isVisitable = true;
              break;
            case "s":
              newState.grid[j][i].nodeState.isStart = true;
              newState.grid[newState.start.y][
                newState.start.x
              ].nodeState.isStart = false;
              newState.start = { x: i, y: j };
              break;
            case "d":
              newState.grid[j][i].nodeState.isEnd = true;
              newState.grid[newState.dest.y][
                newState.dest.x
              ].nodeState.isEnd = false;
              newState.dest = { x: i, y: j };
              break;
            default:
              break;
          }
        }
      }
      break;
    default:
      break;
  }
  return newState;
};
