import React, { useContext } from "react";
import { CartContext, WishlistContext } from "../../context";

export function CartProductCard() {
  const { wishlistData, wishlistDataHandler} =
    useContext(WishlistContext);
  const {
    state,
    removeFromCartHandler,
    addProductQtyHandler,
    removeProductQtyHandler,
  } = useContext(CartContext);
  return (
    <section className="section-cart-left">
      <h3 className="txt-left">My cart ({state.cartData.length})</h3>
      <ul className="cart-product-qty">
        {state.cartData.map((item) => {
          const { src, title, brand, mrp, offer_price, _id, qty } = item;
          return (
            <li key={_id}>
              <div className="card card-hz">
                <div className="card-img-container card-img-hz">
                  <img className="card-img" src={src} alt={title} />
                </div>

                <div className="card-desc cart-desc txt-left">
                  <h3>{title}</h3>
                  <p>by {brand}</p>
                  <span className="card-price">
                    Rs {offer_price}
                    <del className="card-mrp">Rs {mrp}</del>
                  </span>
                  <div className="qty-container">
                    <label htmlFor="qty">Quantity</label>

                    <button
                      className="btn btn-outline btn-ss"
                      onClick={() => removeProductQtyHandler(item)}
                      disabled={qty === 1}
                    >
                      -
                    </button>
                    <span>{qty}</span>
                    <button
                      className="btn btn-outline btn-ss"
                      onClick={() => addProductQtyHandler(item)}
                      disabled={qty === 4}
                    >
                      +
                    </button>
                  </div>
                  <div className="card-btns card-btns-hz">
                    <span
                      className=" card-dismis-btn "
                      onClick={() => {
                        removeFromCartHandler(item);
                      }}
                    >
                      &times;
                    </span>
                    { !wishlistData.some(element => element._id === _id ) && <button
                      className="card-cart btn btn-outline "
                      onClick={() => {
                        wishlistDataHandler(item);
                        removeFromCartHandler(item);
                      }}
                    >
                      move to wishlist
                    </button> }
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
