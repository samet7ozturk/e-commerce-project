import axios from "axios";
import { loginUserSuccess, loginUserFailure } from "./userActions";

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://workinteck-fe-final.onrender.com/login",
        credentials
      );

      const user = {
        id: response.data.id,
        name: response.data.name,
        email: credentials.email,
      };

      dispatch(loginUserSuccess(user));

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = response.data.token;
    } catch (error) {
      dispatch(loginUserFailure(error.message));
      throw error;
    }
  };
};