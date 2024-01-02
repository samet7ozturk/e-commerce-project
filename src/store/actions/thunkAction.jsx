import { instanceAxios } from "../../api/api";
import { loginUserSuccess, loginUserFailure } from "./userActions";

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await instanceAxios.post("/login", credentials);

      const user = {
        id: response.data.role_id,
        name: response.data.name,
        email: response.data.email,
      };

      dispatch(loginUserSuccess(user));

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch(loginUserFailure(error.message));
      throw error;
    }
  };
};
