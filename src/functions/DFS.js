import { getAround, isVisited, isSolved, reconstructPath } from "./helper";

export const DFSHelper = (start, dest, map, open = [], closed = [], is8Way) => {
  open.push(...getAround(start, closed, map, is8Way));
  closed.push(start);

  while (open.length !== 0) {
    let next = open.pop();
    if (isSolved(closed, dest)) {
      break;
    } else {
      if (!isVisited(next, closed)) {
        DFS(next, dest, map, open, closed, is8Way);
      }
    }
  }
};

export const DFS = (start, dest, map, open = [], closed = [], is8Way) => {
  DFSHelper(start, dest, map, open, closed, is8Way);
  if (isSolved(closed, dest)) {
    return reconstructPath(closed, dest, is8Way);
  } else {
    return [];
  }
};
