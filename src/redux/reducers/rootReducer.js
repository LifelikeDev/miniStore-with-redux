import * as actionTypes from "../actiontypes";

// initializing default state
const initialState = {
  products: [],
};

// construct rootReducer
const rootReducer = (state = initialState, action) => {
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

export default rootReducer;
