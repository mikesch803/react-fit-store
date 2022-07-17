import React, { useState } from "react";
import "./ProductCard.css";
import { HeartIcon, RatingIcon, WishlistOutlineIcon } from "../../icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useFilter, useWishlist } from "../../context";
import { checkInCart, checkInWishlist } from "../../utils/functions";

export function ProductCard({ filterHandler }) {
  const { getSortedArr } = useFilter();
  const { wishlistDataHandler, wishlistData } = useWishlist();
  const { state, addToCartHandler } = useCart();
  const [btnDisable, setBtnDisable] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="product-component">
      <h2 className="product-section-title txt-left">
        Showing all products
        <button className="btn btn-primary btn-filter" onClick={filterHandler}>
          filter
        </button>
      </h2>
      <ul className="product-list">
        {getSortedArr.map((item) => {
          const { src, title, brand, offer_price, mrp, _id, rating } = item;
          return (
            <li key={_id}>
              <div className="card card-vrt card-dismis">
                <div className="card-img-container">
                  <img
                    className="card-img"
                    src={src}
                    alt={title}
                    onClick={() => navigate(`/product/${_id}`)}
                  />
                </div>
                <div className="card-desc txt-left">
                  <h3 className="card-desc-title">
                    {title}
                    <span className=" rating-num m-left">
                      {rating}
                      <RatingIcon />
                    </span>
                  </h3>
                  <p>by {brand}</p>
                  <span className="card-price">Rs {offer_price}</span>
                  <del className="card-mrp">Rs {mrp}</del>
                  <div className="card-btns ">
                    {checkInCart(state.cartData, item) ? (
                      <Link
                        to="/cart"
                        className="card-cart btn btn-primary txt-center"
                      >
                        go to cart
                      </Link>
                    ) : (
                      <button
                        className="card-cart btn btn-primary "
                        disabled={btnDisable}
                        onClick={() => {
                          addToCartHandler(item);
                          setBtnDisable(true);
                        }}
                      >
                        add to cart
                      </button>
                    )}
                  </div>
                </div>
                <div
                  className="card-dismis-btn"
                  onClick={() => wishlistDataHandler(item)}
                >
                  {checkInWishlist(wishlistData, item) ? (
                    <HeartIcon />
                  ) : (
                    <WishlistOutlineIcon />
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
