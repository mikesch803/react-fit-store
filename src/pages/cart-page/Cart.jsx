import React from "react";
import { tracksuit } from "../../assests/images";
import { Header } from "../../components";
import "./Cart.css";

export function Cart() {
  return (
    <div className="grid-layout-cart">
      <Header />
      <section className="section-cart-left">
        <h3>My cart (20)</h3>
        <ul className="cart-product-qty">
          <li>
            <div className="card card-hz">
              <div className="card-img-container card-img-hz">
                <img className="card-img" src={tracksuit} alt="track-suit" />
              </div>
              <div className="card-desc cart-desc">
                <h3>Track suit</h3>
                <p>by H&M</p>
                <span className="card-price">
                  Rs 499<del className="card-mrp">Rs 999</del>
                </span>

                <form action="">
                  <label for="">
                    Quantity
                    <input type="number" className="product-qty" />
                  </label>
                </form>

                <div className="card-btns card-btns-hz">
                  <button className="card-cart btn btn-primary ">
                    remove from cart
                  </button>
                  <button className="card-cart btn btn-outline ">
                    move to wishlist
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="section-cart-right">
        <div className="cart-price-detail">
          <h3>Price details</h3>
          <div className="card card-vrt card-txt">
            <p>
              Price (2) <span>Rs 1999</span>
            </p>
            <p>
              Discount <span>Rs -1000</span>
            </p>
            <p>
              Delivery charges <span>Rs 100</span>
            </p>
            <h3>
              Total Amount <span>1099</span>
            </h3>
            <p>you will save Rs 1000 on this order</p>
            <div className="card-btns">
              <button className="card-cart btn btn-primary">place order</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
