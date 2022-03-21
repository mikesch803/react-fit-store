export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
        addToCartToggle: !state.addToCartToggle,
      };

    case "REMOVE_FROM_CART":
      return state.cartData.includes(action.payload)
        ? {
            ...state,
            cartData: state.cartData.filter((item) => item !== action.payload),
          }
        : null;

    default:
      return state;
  }
};
