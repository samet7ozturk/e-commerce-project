const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
