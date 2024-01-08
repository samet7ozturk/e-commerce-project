const initialState = {
  productList: [],
  product: {},
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, loading: true };

    case "FETCHED":
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: action.payload.products,
        fetchState: "FETCHED",
      };

    case "FAILED":
      return { ...state, loading: false, products: [], error: action.payload };

    case "FETCH_MORE":
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: [...state.productList, ...action.payload.products],
        fetchState: "sadas",
      };

    case "FETCH_PRODUCT":
      return {
        ...state,
        product: action.payload,
        fetchState: "FETCHED",
      };

    default:
      return state;
  }
};

export default productReducer;
