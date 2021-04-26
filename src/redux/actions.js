import * as actionTypes from "./actiontypes";

// creating action functions
const getProducts = (products) => {
  return { type: actionTypes.GET_PRODUCTS, payload: products };
};

export { getProducts };
