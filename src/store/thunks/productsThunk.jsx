import { instanceAxios } from "../../api/api";
import {
  fetchMore,
  fetchProduct,
  setFailed,
  setFetched,
  setFetching,
} from "../actions/productsActions";

export const fetchProducts = (data) => async (dispatch) => {
  try {
    dispatch(setFetching());

    const response = await instanceAxios.get("/products", {
      params: data,
    });

    dispatch(setFetched(response.data));
    console.log("productsdata :", response.data);
  } catch (error) {
    dispatch(setFailed(error.message));
  }
};

export const fetchSingleProduct = (data) => async (dispatch) => {
  try {
    dispatch(setFetching());

    const response = await instanceAxios.get(`/products/${data}`);

    dispatch(fetchProduct(response.data));
    console.log("productsdata :", response.data);
  } catch (error) {
    dispatch(setFailed(error.message));
  }
};

export const fetchNextPage = (data) => async (dispatch) => {
  try {
    const response = await instanceAxios.get("/products", {
      params: data,
    });
    dispatch(fetchMore(response.data));
    console.log("productsdata :", response.data);
  } catch (error) {
    dispatch(setFailed(error.message));
  }
};
