import { getAround, isVisited } from "./helper";

export const DFS = (start, dest, map, open = [], closed = []) => {
  open.push(...getAround(start, closed, map));
  closed.push(start);

  while (open.length !== 0) {
    let next = open.pop();
    if (
      closed.filter((coord) => coord.x === dest.x && coord.y === dest.y)
        .length !== 0
    ) {
      break;
    } else {
      if (!isVisited(next, closed)) {
        DFS(next, dest, map, open, closed);
      }
    }
  }
};
