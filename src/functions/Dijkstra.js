import { BaseAstar } from "./Astar";

export const Dijkstra = (start, dest, map, open = [], closed = [], is8Way) => {
  return BaseAstar(start, dest, map, open, closed, is8Way, () => 0);
};
