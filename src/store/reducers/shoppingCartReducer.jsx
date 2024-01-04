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

      if (existingProduct) {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            ),
          })
        );
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: [
              ...state.cart,
              { product: action.payload, count: 1, checked: false },
            ],
          })
        );
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
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, count: item.count - 1 }
                : item
            ),
          })
        );
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

    case "CHECK_PRODUCT":
      const checkedItemId = action.payload.id;
      const updatedCartt = state.cart.map((item) => {
        if (item.product.id === checkedItemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      localStorage.setItem(
        "shoppingCart",
        JSON.stringify({ ...state, cart: updatedCartt })
      );

      return {
        ...state,
        cart: updatedCartt,
      };

    case "DELETE_PRODUCT":
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.id
      );
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify({ ...state, cart: updatedCart })
      );
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
