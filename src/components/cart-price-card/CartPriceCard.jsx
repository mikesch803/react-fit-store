import React from "react";
import { useCart } from "../../context";
import {
  allProductTotalDiscount,
  allProductTotalMrp,
  allProductTotalOfferPrice,
} from "../../utils/functions";

export function CartPriceCard() {
  const { state } = useCart();
  return (
    <section className="section-cart-right">
      {state.cartData.length !== 0 && (
        <div className="cart-price-detail">
          <h3 className="txt-left">Price details</h3>
          <div className="card card-vrt card-txt">
            <p>
              Price ({state.cartData.length}){" "}
              <span>Rs {allProductTotalMrp(state.cartData)}</span>
            </p>
            <p>
              Discount <span>Rs {allProductTotalDiscount(state.cartData)}</span>
            </p>
            <p>
              Delivery charges <span>Rs 100</span>
            </p>
            <h3>
              Total Amount{" "}
              <span>{allProductTotalOfferPrice(state.cartData) + 100}</span>
            </h3>
            <p>
              you will save Rs {allProductTotalDiscount(state.cartData)}
              on this order
            </p>
            <div className="card-btns">
              <button className="card-cart btn btn-primary">place order</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
