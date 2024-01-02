const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const storedCart = localStorage.getItem("shoppingCart");
const initialCartState = storedCart ? JSON.parse(storedCart) : initialState;

const shoppingCartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      localStorage.setItem("shoppingCart", JSON.stringify(state));
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { product: action.payload, count: 1, checked: false },
          ],
        };
      }

    case "DECREASE_COUNT":
      const decreasedItem = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (decreasedItem.count > 1) {
        localStorage.setItem("shoppingCart", JSON.stringify(state));
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count - 1 }
              : item
          ),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default shoppingCartReducer;
