const initialState = [template("Add something to do!")];

const template = (todo) => ({
  todo,
  completed: false,
  key: Date.now().toString(),
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [template(payload), ...state];
    case "COMPLETE_TODO":
      return state.filter((item) => item.key !== payload);
    case "REMOVE_TODO":
      return state.filter((item) => item.key !== payload);
  }
};
