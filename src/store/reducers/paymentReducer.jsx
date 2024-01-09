const initialState = {
  address: [],
  categories: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESS_DATA":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
