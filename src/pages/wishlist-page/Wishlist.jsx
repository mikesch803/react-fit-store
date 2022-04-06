import React, { useEffect } from "react";
import "./Wishlist.css";
import { useCart, useWishlist } from "../../context";
import { RatingIcon } from "../../icons/icons";
import { Link } from "react-router-dom";
import axios from "axios";

export function Wishlist() {
  const { wishlistData, wishlistDataHandler, setWishlistData } = useWishlist();
  const { state, addToCartHandler } = useCart();

  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: encodedToken,
          },
        });
        console.log("getting from wishlist ", response);
        if (response.status === 200) {
          console.log(response);
          setWishlistData(response.data.wishlist);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [encodedToken, setWishlistData]);

  return (
    <div className="grid-layout-wishlist">
      <main className="wishlist">
        <h2>My Wishlist</h2>
        <ul className="wishlist-container">
          {wishlistData.map((item) => {
            const { _id, src, title, brand, offer_price, mrp, rating } = item;
            return (
              <li>
                <div className="card card-hz card-dismis" key={_id}>
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
                      {state.cartData.findIndex(
                        (element) => element._id === item._id
                      ) !== -1 ? (
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
        </ul>
      </main>
    </div>
  );
}
