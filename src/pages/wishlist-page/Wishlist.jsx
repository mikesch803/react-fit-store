import React, { useContext } from "react";
import { Header } from "../../components";
import "./Wishlist.css";
import { CartContext, WishlistContext } from "../../context";
import { RatingIcon } from "../../icons/icons";
import { Link } from "react-router-dom";

export function Wishlist() {

  const { wishlistData, wishlistDataHandler } = useContext(WishlistContext);
  const { dispatch, state } = useContext(CartContext);

  return (
    <div className="grid-layout-wishlist">
      <Header />
      <section className="wishlist">
        <h2>My Wishlist</h2>
        {wishlistData.map((item) => {
          const { _id, src, title, brand, offer_price, mrp, rating } = item;
          return (
            <div className="card card-hz card-dismis" key={_id}>
              <div className="card-img-container card-img-hz">
                <img className="card-img" src={src} alt="track-suit" />
              </div>
              <div className="card-desc txt-left">
                <h3>{title}</h3>
                <p>{brand}</p>
                <span className="card-price">Rs {offer_price}</span>
                <del className="card-mrp">Rs {mrp}</del>
                <span className=" rating-num txt-left">
                  {rating}
                  <RatingIcon />
                </span>
                <div className="card-btns ">
                  {state.cartData.includes(item) ? (
                    <Link to="/cart"  className="card-cart btn btn-primary ">
                      go to cart
                    </Link >
                  ) : (
                    <button
                      className="card-cart btn btn-primary "
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: item })
                      }
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
          );
        })}
      </section>
    </div>
  );
}
