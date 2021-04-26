import * as actionTypes from "./actiontypes";

// creating action functions
const getProductsFunction = () => {
  return { type: actionTypes.GET_PRODUCTS };
};

export { getProductsFunction };
