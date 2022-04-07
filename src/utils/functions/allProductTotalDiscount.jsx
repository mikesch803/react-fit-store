import { allProductTotalMrp } from "./allProductTotalMrp";
import { allProductTotalOfferPrice } from "./allProductTotalOfferPrice";

export const allProductTotalDiscount = (products) => {
  return allProductTotalMrp(products) - allProductTotalOfferPrice(products);
};
