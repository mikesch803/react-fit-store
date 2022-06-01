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

  if (state.rating) {
    sortArr = sortArr.filter((item) => item.rating > state.rating);
  }

  if (state.brand.length !== 0 && state.brand) {
    sortArr = sortArr.filter((item) => state.brand.includes(item.brand));
  }

  if (state.priceRange) {
    sortArr = sortArr.filter((item) => item.offer_price < state.priceRange);
  }

  if(state.search) {
    sortArr = sortArr.filter(item => item.brand.toLowerCase().match(state.search.toLowerCase()) || item.title.toLowerCase().match(state.search.toLowerCase()))
  }

  return sortArr;
};
