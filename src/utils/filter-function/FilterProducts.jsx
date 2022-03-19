export const sortProducts = (productData, state) => {
  let sortArr = productData;
  if (state.sortby && state.sortby === "LOW_TO_HIGH") {
    sortArr = sortArr.sort(
      (firstItem, secondItem) => firstItem.offer_price - secondItem.offer_price
    );
  }
  if (state.sortby && state.sortby === "HIGH_TO_LOW") {
    sortArr = sortArr.sort(
      (firstItem, secondItem) => secondItem.offer_price - firstItem.offer_price
    );
  }

  if (state.available) {
    sortArr = sortArr.filter((item) => item.in_stock);
  }

  if (state.rating && state.rating === 1) {
    sortArr = sortArr.filter((item) => item.rating > 1);
  }

  if (state.rating && state.rating === 2) {
    sortArr = sortArr.filter((item) => item.rating > 2);
  }

  if (state.rating && state.rating === 3) {
    sortArr = sortArr.filter((item) => item.rating > 3);
  }

  if (state.rating && state.rating === 4) {
    sortArr = sortArr.filter((item) => item.rating > 4);
  }

  if (state.brand.length !== 0 && state.brand) {
    sortArr = sortArr.filter((item) => state.brand.includes(item.brand));
  }

  if (state.priceRange) {
    sortArr = sortArr.filter((item) => item.offer_price < state.priceRange);
  }

  return sortArr;
};
