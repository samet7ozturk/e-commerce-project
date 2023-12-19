const initialState = { id: null, name: "", email: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return action.payload;
    case "LOGIN_USER_FAILURE":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
