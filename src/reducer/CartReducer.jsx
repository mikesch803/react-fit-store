export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_QTY":
      return {
        ...state,
        cartData: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cartData: action.payload,
        addToCartToggle: !state.addToCartToggle,
      };
    default:
      return state;
  }
};
