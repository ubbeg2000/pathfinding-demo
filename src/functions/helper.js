export const isValidCoord = (coord) => {
  return coord.x >= 0 && coord.y >= 0 && coord.x < 20 && coord.y < 20;
};

export const isVisited = (coord, visited) => {
  return (
    visited.filter((el) => el.x === coord.x && el.y === coord.y).length !== 0
  );
};

export const isVisitable = (coord, grid) => {
  return grid[coord.y][coord.x].nodeState.isVisitable;
};

export const isReachable = (coord1, coord2, is8Way) => {
  let xdist = Math.abs(coord1.x - coord2.x);
  let ydist = Math.abs(coord1.y - coord2.y);
  if (is8Way) {
    return xdist <= 1 && ydist <= 1;
  } else {
    if (xdist === 1 && ydist === 0) return true;
    if (ydist === 1 && xdist === 0) return true;
  }
  return false;
};

const shuffle = (arr) => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

export const getAround = (coord, visited, map, is8Way) => {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, -1, -1, -1, 0, 1, 1, 1];

  let retval = [];

  for (let i = 0; i < 8; i += is8Way ? 1 : 2) {
    let newCoord = { x: coord.x + dx[i], y: coord.y + dy[i] };
    if (
      isValidCoord(newCoord) &&
      !isVisited(newCoord, visited) &&
      isVisitable(newCoord, map)
    ) {
      retval.push(newCoord);
    }
  }

  return retval;
};

export const mazeGetAround = (coord, visited) => {
  const dx = [0, 0, 2, -2];
  const dy = [2, -2, 0, 0];
  let retval = [];

  for (let i = 0; i < 4; i++) {
    let newCoord = { x: coord.x + dx[i], y: coord.y + dy[i] };
    if (isValidCoord(newCoord) && !isVisited(newCoord, visited)) {
      retval.push(newCoord);
    }
  }

  return shuffle(retval);
};

export const reconstructPath = (closed, is8Way) => {
  let reversedClosed = [...closed].reverse();
  let currentNodeIndex = 0;
  let path = [reversedClosed[currentNodeIndex]];

  for (let i = 1; i < reversedClosed.length; i++) {
    if (
      isReachable(reversedClosed[currentNodeIndex], reversedClosed[i], is8Way)
    ) {
      path.push(reversedClosed[i]);
      currentNodeIndex = i;
    }
  }

  return path;
};

export const mazeBase = () => {
  let maze = [];
  let temp = [];

  for (let i = 0; i < 20; i++) {
    temp = [];
    for (let j = 0; j < 20; j++) {
      temp.push(j % 2 !== 0 ? (i % 2 === 0 ? "#" : "*") : "#");
    }
    maze.push(temp);
  }

  return maze;
};

export const isSolved = (closed, dest) => {
  return (
    closed.filter((coord) => coord.x === dest.x && coord.y === dest.y)
      .length !== 0
  );
};

export const isIn = isSolved;
