const initialState = { count: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "subtract":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
