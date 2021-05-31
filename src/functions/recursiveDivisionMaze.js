const chooseDirection = (width, height) => {
  if (width > height) return "v";
  if (height > width) return "h";
  return Math.floor(Math.random() * 100) % 2 === 0 ? "h" : "v";
};

const randomEven = (lower, upper) => {
  let n = Math.floor((Math.random() * (upper - lower)) / 2);
  let retval;

  if (lower % 2 === 0) {
    retval = lower + 2 * n;
  } else {
    retval = lower + 1 + 2 * n;
  }
  if (retval > upper) retval -= 2;
  return retval;
};

const randomOdd = (lower, upper) => {
  let n = Math.floor((Math.random() * (upper - lower)) / 2);
  let retval;

  if (lower % 2 !== 0) {
    retval = lower + 2 * n;
  } else {
    retval = lower + 1 + 2 * n;
  }
  if (retval > upper) retval -= 2;
  return retval;
};

const recursiveDivision = (maze, bounds) => {
  let direction = chooseDirection(bounds.ux - bounds.lx, bounds.uy - bounds.ly);
  let wall;
  let hole;

  if (direction === "h") {
    wall = randomEven(bounds.ly, bounds.uy);
    hole = randomOdd(bounds.lx, bounds.ux);

    for (let i = bounds.lx; i < bounds.ux + 1; i++) {
      maze[wall][i] = i === hole ? "*" : "#";
    }
  } else {
    wall = randomEven(bounds.lx, bounds.ux);
    hole = randomOdd(bounds.ly, bounds.uy);

    for (let i = bounds.ly; i < bounds.uy + 1; i++) {
      maze[i][wall] = i === hole ? "*" : "#";
    }
  }

  if (bounds.ux - bounds.lx >= 1 && bounds.uy - bounds.ly >= 1) {
    if (direction === "h") {
      recursiveDivision(maze, {
        ...bounds,
        uy: wall - 1,
      });
      recursiveDivision(maze, {
        ...bounds,
        ly: wall + 1,
      });
    } else {
      recursiveDivision(maze, {
        ...bounds,
        ux: wall - 1,
      });
      recursiveDivision(maze, {
        ...bounds,
        lx: wall + 1,
      });
    }
  }
};

export const recursiveDivisionMaze = () => {
  let retval = [];
  let temp = [];

  for (let i = 0; i < 20; i++) {
    temp = [];
    for (let j = 0; j < 20; j++) {
      temp.push("*");
    }
    retval.push(temp);
  }

  recursiveDivision(retval, { lx: 0, ux: 19, ly: 0, uy: 19 });

  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "s";
  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "d";

  retval.forEach((row) => console.log(row.join("")));

  return retval;
};
