export const allProductTotalMrp = (products) =>
products.reduce(
    (acc, curr) => acc + curr.mrp * curr.qty,
    0
  )