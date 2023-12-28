import { instanceAxios } from "../../api/api";

export const fetchProducts =
  ({ category, filter, sort }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "FETCHING" });

      // API'den ürünleri getir
      const response = await instanceAxios.get("/products", {
        params: { category, filter, sort },
      });

      // Başarı durumunda ürünleri al ve store'a gönder
      dispatch({
        type: "FETCHED",
        payload: response.data,
      });
      console.log("productsdata :", response.data);
    } catch (error) {
      // Hata durumunda hatayı store'a gönder
      dispatch({
        type: "FAILED",
        payload: error.message,
      });
    }
  };
