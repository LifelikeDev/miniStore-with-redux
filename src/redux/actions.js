import * as actionTypes from "./actiontypes";

/* creating action functions */

// fetch products
const getProducts = (products) => {
  return { type: actionTypes.GET_PRODUCTS, payload: products };
};

// select product
const selectProduct = (product) => {
  return { type: actionTypes.SELECT_PRODUCT, payload: product };
};

// removed previously selected product when loading a newly selected one
const removeSelectedProduct = () => {
  return { type: actionTypes.REMOVE_SELECTED_PRODUCT };
};

export { getProducts, selectProduct, removeSelectedProduct };
