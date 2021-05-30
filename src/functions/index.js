import { BFS } from "./BFS";
import { DFS } from "./DFS";
import { ManhattanAstar, PythagoreanAstar } from "./Astar";
import { Dijkstra } from "./Dijkstra";
import { emptyMaze } from "./emptyMaze";
import { simpleRandomMaze } from "./simpleRandomMaze";
import { recursiveBacktrackMaze } from "./recursiveBacktrackMaze";

export const PATHFINDING_ALGORITHMS = {
  DFS: DFS,
  BFS: BFS,
  ManhattanAstar: ManhattanAstar,
  PythagoreanAstar: PythagoreanAstar,
  Dijkstra: Dijkstra,
};
export const MAZE_ALGORITHMS = {
  emptyMaze: emptyMaze,
  simpleRandomMaze: simpleRandomMaze,
  recursiveBacktrackMaze: recursiveBacktrackMaze,
};
