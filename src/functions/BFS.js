import { getAround, isVisited } from "./helper";

export const BFS = (start, dest, map, open = [], closed = []) => {
  open = [...getAround(start, closed, map), ...open];
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
        BFS(next, dest, map, open, closed);
      }
    }
  }
};
