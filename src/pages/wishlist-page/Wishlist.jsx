import React, { useEffect } from "react";
import "./Wishlist.css";
import { useCart, useWishlist } from "../../context";
import { RatingIcon } from "../../icons/icons";
import { Link } from "react-router-dom";
import { checkInCart } from "../../utils/functions/checkInCart";
import { useTitle } from "../../hooks/useTitle";

export function Wishlist() {
  const { getWishlist, wishlistData, wishlistDataHandler } = useWishlist();
  const { state, addToCartHandler } = useCart();
  useTitle('Wishlist')
  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <div className="grid-layout-wishlist">
    
      <main className="wishlist">
      {wishlistData.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://multivendor.amrkart.com/public/not-found.jpg"
            alt="empty-wishlist"
          />
        </div>) :
        <>
        <h2 className="txt-center">My Wishlist</h2>
        <ul className="wishlist-container">
          {wishlistData.map((item) => {
            const { _id, src, title, brand, offer_price, mrp, rating } = item;
            return (
              <li key={_id}>
                <div className="card card-hz card-dismis" >
                  <div className="card-img-container card-img-hz">
                    <img className="card-img" src={src} alt="track-suit" />
                  </div>
                  <div className="card-desc txt-left flex">
                    <h3>{title}</h3>
                    <p>{brand}</p>
                    <div>
                      <span className="card-price">Rs {offer_price}</span>
                      <del className="card-mrp">Rs {mrp}</del>
                    </div>
                    <span className=" rating-num txt-left">
                      {rating}
                      <RatingIcon />
                    </span>
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
                          onClick={() => addToCartHandler(item)}
                        >
                          add to cart
                        </button>
                      )}
                    </div>
                  </div>
                  <span
                    className=" card-dismis-btn"
                    onClick={() => wishlistDataHandler(item)}
                  >
                    &times;
                  </span>
                </div>
              </li>
            );
          })}
        </ul></>}
      </main>
    </div>
  );
}
