import React, { useContext } from "react";
import { HeartIcon, RatingIcon, WishlistOutlineIcon } from "../../icons/icons";
import { FilterContext, WishlistContext } from "../../context";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
export function ProductCard() {
  const { getSortedArr } = useContext(FilterContext);
  const { wishlistDataHandler, wishlistData } = useContext(WishlistContext);
  const { dispatch, state } = useContext(CartContext);
  console.log("wishlistdata ", wishlistData);
  return (
    <div className="product-component">
      <ul className="product-list">
        {getSortedArr.map((item) => {
          const { src, title, brand, offer_price, mrp, _id, rating } = item;
          return (
            <li key={_id}>
              <div className="card card-vrt card-dismis">
                <div className="card-img-container">
                  <img className="card-img" src={src} alt={title} />
                </div>
                <div className="card-desc txt-left">
                  <h3 className="card-desc-title">
                    {title}
                    <span className=" rating-num">
                      {rating}
                      <RatingIcon />
                    </span>
                  </h3>
                  <p>by {brand}</p>
                  <span className="card-price">Rs {offer_price}</span>
                  <del className="card-mrp">Rs {mrp}</del>
                  <div className="card-btns ">
                    {state.cartData.includes(item) ? (
                      <Link
                        to="/cart"
                        className="card-cart btn btn-primary txt-center"
                      >
                        go to cart
                      </Link>
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
                <div
                  className="card-dismis-btn"
                  onClick={() => wishlistDataHandler(item)}
                >
                  {wishlistData.findIndex(
                    (element) => element._id === item._id
                  ) !== -1 ? (
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
