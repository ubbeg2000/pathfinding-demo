const isValidCoords = (x, y) => {
  return x >= 0 && y >= 0 && y < 50 && 2 < 20;
};

export const getAround = (x, y, openStack) => {
  let retval = [];
  let dx = [0, 1, 1, -1, -1, 1, -1, 1];
  let dy = [1, 1, -1, -1, 1, -1, 0, 0];

  for (let i = 0; i < 8; i++) {
    if (isValidCoords(x + dx[i], y + dy[i])) {
      if (openStack.indexOf([x + dx[i], y + dy[i]]) === -1) {
        retval = [...retval, [x + dx[i], y + dy[i]]];
      }
    }
  }

  return retval;
};
