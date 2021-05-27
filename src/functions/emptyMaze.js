export const emptyMaze = () => {
  let retval = [];
  let temp = [];

  for (let i = 0; i < 20; i++) {
    temp = [];
    for (let j = 0; j < 20; j++) {
      temp.push("*");
    }
    retval.push(temp);
  }

  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "s";
  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "d";

  return retval;
};
