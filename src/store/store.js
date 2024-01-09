import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import globalReducer from "./reducers/globalReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import storeReducer from "./reducers/storeReducer";
import paymentReducer from "./reducers/paymentReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  products: productReducer,
  shoppingCart: shoppingCartReducer,
  payment: paymentReducer,
  store: storeReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export default store;
