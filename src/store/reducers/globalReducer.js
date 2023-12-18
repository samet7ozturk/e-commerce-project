const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GLOBAL_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default globalReducer;
