import { BFS } from "./BFS";
import { DFS } from "./DFS";
import { emptyMaze } from "./emptyMaze";
import { simpleRandomMaze } from "./simpleRandomMaze";
import { recursiveBacktrackMaze } from "./recursiveBacktrackMaze";

export const PATHFINDING_ALGORITHMS = { DFS: DFS, BFS: BFS };
export const MAZE_ALGORITHMS = {
  emptyMaze: emptyMaze,
  simpleRandomMaze: simpleRandomMaze,
  recursiveBacktrackMaze: recursiveBacktrackMaze,
};
