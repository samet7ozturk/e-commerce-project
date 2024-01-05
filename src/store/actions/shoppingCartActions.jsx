export const addToCart = (data) => ({
  type: "ADD_TO_CART",
  payload: data,
});

export const decrease = (data) => ({
  type: "DECREASE_COUNT",
  payload: data,
});

export const deleteProduct = (data) => ({
  type: "DELETE_PRODUCT",
  payload: data,
});

export const checkProduct = (data) => ({
  type: "CHECK_PRODUCT",
  payload: data,
});

export const deleteBasket = (data) => ({
  type: "DELETE_BASKET",
  payload: data,
});
