export const increment = (amount = 1) => ({
  type: "INCREMENT",
  payload: amount,
});
export const decrement = (amount = 1) => ({
  type: "DECREMENT",
  payload: amount,
});
