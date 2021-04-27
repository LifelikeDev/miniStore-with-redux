import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  selectedProductReducer,
} from "./reducers/rootReducer";

const store = createStore(
  combineReducers({
    entireProducts: getProductsReducer,
    product: selectedProductReducer,
  }),
  composeWithDevTools()
);

export default store;
