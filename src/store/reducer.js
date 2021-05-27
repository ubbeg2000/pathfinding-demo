export const CHANGE_START = "CHANGE_START";
export const CHANGE_DEST = "CHANGE_DEST";
export const CLEAR = "CLEAR";

export const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case CHANGE_START:
      newState.grid[state.start.x][state.start.y].nodeState.isStart = false;
      newState.grid[action.payload.x][
        action.payload.y
      ].nodeState.isStart = true;
      newState.start = {
        x: action.payload.x,
        y: action.payload.y,
      };
      break;
    case CHANGE_DEST:
      newState.grid[state.dest.x][state.dest.y].nodeState.isEnd = false;
      newState.grid[action.payload.x][action.payload.y].nodeState.isEnd = true;
      newState.dest = {
        x: action.payload.x,
        y: action.payload.y,
      };
      break;
    case CLEAR:
      newState.grid[state.start.x][state.start.y].nodeState.isStart = false;
      newState.grid[state.dest.x][state.dest.y].nodeState.isEnd = false;
      newState.grid[0][0].nodeState.isStart = true;
      newState.grid[49][19].nodeState.isEnd = true;
      newState.start = { x: 0, y: 0 };
      newState.dest = { x: 49, y: 19 };
      break;
    default:
      break;
  }
  return newState;
};
