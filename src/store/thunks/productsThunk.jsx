import { instanceAxios } from "../../api/api";
import {
  fetchMore,
  setFailed,
  setFetched,
  setFetching,
} from "../actions/productsActions";

export const fetchProducts = (data) => async (dispatch) => {
  try {
    dispatch(setFetching());

    // API'den ürünleri getir
    const response = await instanceAxios.get("/products", {
      params: data,
    });

    // Başarı durumunda ürünleri al ve store'a gönder
    dispatch(setFetched(response.data));
    console.log("productsdata :", response.data);
  } catch (error) {
    // Hata durumunda hatayı store'a gönder
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
