import * as actionTypes from "../actiontypes";

// initializing default state
const initialState = {
  products: [],
  note: "some regular products",
};

// construct rootReducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: [1, 2],
        note: "products added",
      };

    default:
      return state;
  }
};

export default rootReducer;
