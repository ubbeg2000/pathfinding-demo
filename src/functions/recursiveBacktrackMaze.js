import { mazeBase, mazeGetAround, isVisited } from "./helper";

const mazeDFS = (start, maze, visited = []) => {
  visited.push(start);

  while (mazeGetAround(start, visited).length !== 0) {
    let startNew = mazeGetAround(start, visited).pop();
    maze[(start.y + startNew.y) / 2][(start.x + startNew.x) / 2] = "*";
    if (!isVisited(startNew, visited)) {
      mazeDFS(startNew, maze, visited);
    }
  }
};

export const recursiveBacktrackMaze = () => {
  let retval = mazeBase();
  mazeDFS({ x: 1, y: 1 }, retval);
  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "s";
  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "d";
  return retval;
};
