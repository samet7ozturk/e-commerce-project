const initialState = { id: null, name: "", email: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        id: action.payload.role_id,
        name: action.payload.name,
        email: action.payload.email,
      };
    case "LOGIN_USER_FAILURE":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
