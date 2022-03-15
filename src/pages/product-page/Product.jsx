import React from "react";
import { Aside, Header } from "../../components";
import "./Product.css";
import { tracksuit } from "../../assests/images";

export function Product() {
  return (
    <div className="grid-layout-product">
      <Header />
      <Aside />
      <section className="product">
        <h2 className="product-section-title">Showing all products</h2>
        <div className="product-component">
          <ul className="product-list">
            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="card card-vrt">
                <div className="card-img-container ">
                  <img className="card-img" src={tracksuit} alt="track-suit" />
                </div>
                <div className="card-desc">
                  <h3>Track suit</h3>
                  <p>by H&M</p>
                  <span className="card-price">Rs 499</span>
                  <del className="card-mrp">Rs 999</del>
                  <div className="card-btns ">
                    <button className="card-cart btn btn-primary ">
                      add to cart
                    </button>
                    <button className="card-wishlist btn btn-outline">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
