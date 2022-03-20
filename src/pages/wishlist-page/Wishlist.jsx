import React, { useContext } from "react";
import { Header } from "../../components";
import "./Wishlist.css";
import { WishlistContext } from "../../context";
import { RatingIcon } from "../../icons/icons";
export function Wishlist() {
  const { wishlistData, wishlistDataHandler } = useContext(WishlistContext);
  return (
    <div className="grid-layout-wishlist">
      <Header />
      <section className="wishlist">
        <h2>My Wishlist</h2>
        {wishlistData.map((item) => (
          <div className="card card-hz card-dismis" key={item._id}>
            <div className="card-img-container card-img-hz">
              <img className="card-img" src={item.src} alt="track-suit" />
            </div>
            <div className="card-desc txt-left">
              <h3>{item.title}</h3>
              <p>{item.brand}</p>
              <span className="card-price">Rs {item.offer_price}</span>
              <del className="card-mrp">Rs {item.mrp}</del>
              <span className=" rating-num txt-left">
                {item.rating}
                <RatingIcon />
              </span>
              <div className="card-btns card-btns-hz">
                <button className="card-cart btn btn-primary ">
                  add to cart
                </button>
              </div>
            </div>
            <span
              className=" card-dismis-btn"
              onClick={() => wishlistDataHandler(item)}
            >
              &times;
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
