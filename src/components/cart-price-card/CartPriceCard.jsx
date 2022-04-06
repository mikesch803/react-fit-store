import React from "react";
import { useCart } from "../../context";

export function CartPriceCard() {
  const { state } = useCart()
  return (
    <section className="section-cart-right">
      <div className="cart-price-detail">
        <h3 className="txt-left">Price details</h3>
        <div className="card card-vrt card-txt">
          <p>
            Price ({state.cartData.length}){" "}
            <span>
              Rs{" "}
              {state.cartData.reduce(
                (acc, curr) => acc + curr.mrp * curr.qty,
                0
              )}
            </span>
          </p>
          <p>
            Discount{" "}
            <span>
              Rs{" "}
              {state.cartData.reduce(
                (acc, curr) => acc + curr.mrp * curr.qty,
                0
              ) -
                state.cartData.reduce((acc, curr) => acc + curr.offer_price, 0)}
            </span>
          </p>
          <p>
            Delivery charges <span>Rs 100</span>
          </p>
          <h3>
            Total Amount{" "}
            <span>
              {state.cartData.reduce(
                (acc, curr) => acc + curr.offer_price * curr.qty,
                0
              ) + 100}
            </span>
          </h3>
          <p>
            you will save Rs{" "}
            {state.cartData.reduce((acc, curr) => acc + curr.mrp, 0) -
              state.cartData.reduce(
                (acc, curr) => acc + curr.offer_price,
                0
              )}{" "}
            on this order
          </p>
          <div className="card-btns">
            <button className="card-cart btn btn-primary">place order</button>
          </div>
        </div>
      </div>
    </section>
  );
}
