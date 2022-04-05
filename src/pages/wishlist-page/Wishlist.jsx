import React, { useContext, useEffect } from "react";
import "./Wishlist.css";
import { CartContext, ToastContext, WishlistContext } from "../../context";
import { RatingIcon } from "../../icons/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toast } from "../../components/toast/Toast";

export function Wishlist() {
  const { wishlistData, wishlistDataHandler, setWishlistData } =
    useContext(WishlistContext);
  const {toastState} = useContext(ToastContext)
  const { state, addToCartHandler } = useContext(CartContext);
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
        if (response === 200) {
          setWishlistData(response.data.wishlist);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [wishlistData, encodedToken, setWishlistData]);

  return (
    <div className="grid-layout-wishlist">
              {toastState && <Toast />}
      <section className="wishlist">

        <h2>My Wishlist</h2>

        {wishlistData.map((item) => {
          const { _id, src, title, brand, offer_price, mrp, rating } = item;
          return (
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
          );
        })}
      </section>
    </div>
  );
}
