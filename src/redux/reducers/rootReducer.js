import * as actionTypes from "../actiontypes";

// initializing default state
const initialState = {
  products: [],
};

// construct rootReducer
const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export { getProductsReducer, selectedProductReducer };
