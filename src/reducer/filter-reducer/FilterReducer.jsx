export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortby: action.payload };

    case "EXCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        available: !state.available,
      };

    case "RATING":
      return { ...state, rating: action.payload };

    case "BRAND":
      return state.brand.includes(action.payload)
        ? {
            ...state,
            brand: state.brand.filter((item) => item !== action.payload),
          }
        : { ...state, brand: [...state.brand, action.payload] };

    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };

    case "CLEAR":
      return {
        ...state,
        sortby: null,
        available: false,
        priceRange: 1501,
        brand: [],
        rating: null,
      };

    default:
      return state;
  }
};
