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
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count += 1;

        const newState = {
          ...state,
          cart: updatedCart,
        };

        localStorage.setItem("shoppingCart", JSON.stringify(newState));

        return newState;
      } else {
        const newState = {
          ...state,
          cart: [
            ...state.cart,
            {
              count: 1,
              checked: true,
              product: {
                ...action.payload,
              },
            },
          ],
        };

        localStorage.setItem("shoppingCart", JSON.stringify(newState));

        return newState;
      }

    default:
      return state;
  }
};

export default shoppingCartReducer;
