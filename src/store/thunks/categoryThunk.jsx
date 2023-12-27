import { instanceAxios } from "../../api/api";
import { setGlobalData } from "../actions/globalActions";

export const categories = () => {
  return async (dispatch) => {
    try {
      const response = await instanceAxios.get("/categories");
      dispatch(setGlobalData(response.data));
    } catch (error) {
      throw error;
    }
  };
};
