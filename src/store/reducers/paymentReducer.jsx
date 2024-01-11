const initialState = {
  address: [],
  card: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return { ...state, address: [...state.address, action.payload] };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_CARD":
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
