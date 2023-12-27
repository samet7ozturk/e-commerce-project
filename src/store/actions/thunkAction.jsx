import axios from "axios";
import { loginUserSuccess, loginUserFailure } from "./userActions";

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        credentials
      );

      const user = {
        id: response.data.role_id,
        name: response.data.name,
        email: response.data.email,
      };
      console.log("user :", user);
      console.log("response :", response.data);

      dispatch(loginUserSuccess(response.data));

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = response.data.token;
    } catch (error) {
      dispatch(loginUserFailure(error.message));
      throw error;
    }
  };
};
