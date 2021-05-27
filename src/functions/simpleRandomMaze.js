export const simpleRandomMaze = (w = 3) => {
  let retval = [];
  for (let i = 0; i < 20; i++) {
    let temp = [];
    for (let j = 0; j < 20; j++) {
      Math.random() * 10 > w ? temp.push("*") : temp.push("#");
    }
    retval.push(temp);
  }
  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "s";
  retval[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)] = "d";

  console.log(retval);
  return retval;
};
