export const checkInCart = (products, item) =>
  products.some((product) => product._id === item._id);
