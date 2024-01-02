export const addToCart = (data) => ({
  type: "ADD_TO_CART",
  payload: data,
});

export const decrease = (data) => ({
  type: "DECREASE_COUNT",
  payload: data,
});
