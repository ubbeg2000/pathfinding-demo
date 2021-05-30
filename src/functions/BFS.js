import { getAround, isVisited, isSolved, reconstructPath } from "./helper";

export const BFSHelper = (start, dest, map, open = [], closed = [], is8Way) => {
  open = [...getAround(start, closed, map, is8Way), ...open];
  closed.push(start);

  while (open.length !== 0) {
    let next = open.pop();
    if (isSolved(closed, dest)) {
      break;
    } else {
      if (!isVisited(next, closed)) {
        BFS(next, dest, map, open, closed, is8Way);
      }
    }
  }
};

export const BFS = (start, dest, map, open = [], closed = [], is8Way) => {
  BFSHelper(start, dest, map, open, closed, is8Way);
  if (isSolved(closed, dest)) {
    return reconstructPath(closed, is8Way);
  } else {
    return [];
  }
};
