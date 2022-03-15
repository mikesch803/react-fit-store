import React from "react";
import { Header } from "../../components";
import "./Wishlist.css";
import { tracksuit } from "../../assests/images";
export function Wishlist() {
  return (
    <div className="grid-layout-wishlist">
      <Header />
      <section className="wishlist">
        <h2>My Wishlist</h2>
        <div className="card card-hz card-dismis">
          <div className="card-img-container card-img-hz">
            <img className="card-img" src={tracksuit} alt="track-suit" />
          </div>
          <div className="card-desc">
            <h3>Track suit</h3>
            <p>by H&M</p>
            <span className="card-price">Rs 499</span>
            <del className="card-mrp">Rs 999</del>
            <div className="card-btns card-btns-hz">
              <button className="card-cart btn btn-primary ">
                add to cart
              </button>
            </div>
          </div>
          <span
            className="iconify card-dismis-btn"
            data-icon="mdi:close"
            data-inline="false"
          ></span>
        </div>

        <div className="card card-hz card-dismis">
          <div className="card-img-container card-img-hz">
            <img className="card-img" src={tracksuit} alt="track-suit" />
          </div>
          <div className="card-desc">
            <h3>Track suit</h3>
            <p>by H&M</p>
            <span className="card-price">Rs 499</span>
            <del className="card-mrp">Rs 999</del>
            <div className="card-btns card-btns-hz">
              <button className="card-cart btn btn-primary ">
                add to cart
              </button>
            </div>
          </div>
          <span
            className="iconify card-dismis-btn"
            data-icon="mdi:close"
            data-inline="false"
          ></span>
        </div>

        <div className="card card-hz card-dismis">
          <div className="card-img-container card-img-hz">
            <img className="card-img" src={tracksuit} alt="track-suit" />
          </div>
          <div className="card-desc">
            <h3>Track suit</h3>
            <p>by H&M</p>
            <span className="card-price">Rs 499</span>
            <del className="card-mrp">Rs 999</del>
            <div className="card-btns card-btns-hz">
              <button className="card-cart btn btn-primary ">
                add to cart
              </button>
            </div>
          </div>
          <span
            className="iconify card-dismis-btn"
            data-icon="mdi:close"
            data-inline="false"
          ></span>
        </div>

        <div className="card card-hz card-dismis">
          <div className="card-img-container card-img-hz">
            <img className="card-img" src={tracksuit} alt="track-suit" />
          </div>
          <div className="card-desc">
            <h3>Track suit</h3>
            <p>by H&M</p>
            <span className="card-price">Rs 499</span>
            <del className="card-mrp">Rs 999</del>
            <div className="card-btns card-btns-hz">
              <button className="card-cart btn btn-primary ">
                add to cart
              </button>
            </div>
          </div>
          <span
            className="iconify card-dismis-btn"
            data-icon="mdi:close"
            data-inline="false"
          ></span>
        </div>
      </section>
    </div>
  );
}
