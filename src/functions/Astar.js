import { getAround, isIn } from "./helper";

export const manhattanDistance = (dest, coord) => {
  return Math.abs(dest.x - coord.x) + Math.abs(dest.y - coord.y);
};

export const pythagoreanDistance = (dest, coord) => {
  return Math.sqrt(
    Math.abs(dest.x - coord.x) ** 2 + Math.abs(dest.y - coord.y) ** 2
  );
};

export const mininumFScoreOf = (scoreMatrix, nodes) => {
  let min = nodes[0];
  for (let i = 1; i < nodes.length; i++) {
    if (scoreMatrix[nodes[i].y][nodes[i].x].f <= scoreMatrix[min.y][min.x].f) {
      min = nodes[i];
    }
  }
  return min;
};

export const BaseAstar = (
  start,
  dest,
  map,
  open = [],
  closed = [],
  is8Way,
  heuristicFunction
) => {
  let scoreMatrix = [];
  let neighbors = [];
  let temp = [];
  let tempGScore;

  for (let y = 0; y < 20; y++) {
    temp = [];
    for (let x = 0; x < 20; x++) {
      if (start.x === x && start.y === y) {
        temp.push({
          g: 0,
          f: heuristicFunction(dest, { x: x, y: y }),
          parent: null,
        });
      } else {
        temp.push({
          g: 1000,
          f: heuristicFunction(dest, { x: x, y: y }),
          parent: null,
        });
      }
    }
    scoreMatrix.push(temp);
  }

  open = [start];

  while (open.length !== 0) {
    let current = mininumFScoreOf(scoreMatrix, open);
    open = open.filter((node) => node.x !== current.x || node.y !== current.y);
    closed.push(current);

    if (current.x === dest.x && current.y === dest.y) {
      let cur = current;
      let retval = [];
      while (scoreMatrix[cur.y][cur.x].parent !== null) {
        retval.push(cur);
        cur = scoreMatrix[cur.y][cur.x].parent;
      }
      return retval;
    }

    neighbors = getAround(current, closed, map, is8Way);

    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      tempGScore =
        scoreMatrix[current.y][current.x].g +
        pythagoreanDistance(current, neighbor);

      if (
        tempGScore < scoreMatrix[neighbor.y][neighbor.x].g ||
        !isIn(open, neighbor)
      ) {
        scoreMatrix[neighbor.y][neighbor.x].parent = current;
        scoreMatrix[neighbor.y][neighbor.x].g = tempGScore;
        scoreMatrix[neighbor.y][neighbor.x].f =
          tempGScore + heuristicFunction(dest, neighbor);

        if (!isIn(open, neighbor)) {
          open = [...open, neighbor];
        }
      }
    }
  }

  return [];
};

export const ManhattanAstar = (
  start,
  dest,
  map,
  open = [],
  closed = [],
  is8Way
) => {
  return BaseAstar(start, dest, map, open, closed, is8Way, manhattanDistance);
};

export const PythagoreanAstar = (
  start,
  dest,
  map,
  open = [],
  closed = [],
  is8Way
) => {
  return BaseAstar(start, dest, map, open, closed, is8Way, pythagoreanDistance);
};
