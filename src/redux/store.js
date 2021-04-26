import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  combineReducers({ rootReducer }),
  composeWithDevTools()
);

export default store;