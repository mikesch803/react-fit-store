import React, { useState } from "react";
import { useEffect } from "react";
import { AddressModal } from "..";
import { useAddress, useCart, useWishlist } from "../../context";
import { checkInWishlist } from "../../utils/functions";
import "./CartProductCard.css";
export function CartProductCard() {
  const { wishlistData, wishlistDataHandler } = useWishlist();
  const {
    state,
    removeFromCartHandler,
    addProductQtyHandler,
    removeProductQtyHandler,
  } = useCart();

  const { addresses, getAllAddressesHandler, deliveryAddress, setDeliveryAddress } = useAddress();

  const [addressModal, setAddressModal] = useState(false);
  useEffect(() => {
    getAllAddressesHandler();
  }, []);


  return (
    <section className="section-cart-left">
      {addressModal && (
        <AddressModal
          addressModal={addressModal}
          setAddressModal={setAddressModal}
          setDeliveryAddress={setDeliveryAddress}
        />
      )}
      <ul className="cart-product-qty">
        <h3 className="txt-left cart-left-title">
          My cart ({state.cartData.length})
        </h3>
        {deliveryAddress === undefined ? (
          <li className="address-list">
            <p>
              Deliver to :{" "}
              <span className="ft-w-500">
                {addresses[0]?.name} {addresses[0]?.phone}
              </span>
              <button
                className="btn btn-outline ml-auto"
                onClick={() => setAddressModal(true)}
              >
                Change
              </button>
            </p>
            <p>
              {addresses[0]?.steet} {addresses[0]?.city}
               {addresses[0]?.pincode} {addresses[0]?.state}
              {addresses[0]?.country}
            </p>
          </li>
        ) : (
          <li className="address-list">
            <p>
              Deliver to :{" "}
              <span className="ft-w-500">
                {deliveryAddress?.name} {deliveryAddress?.phone}
              </span>
              <button
                className="btn btn-outline ml-auto"
                onClick={() => setAddressModal(true)}
              >
                Change
              </button>
            </p>
            <p>
              {deliveryAddress?.steet}, {deliveryAddress?.city}-
              {deliveryAddress?.pincode}, {deliveryAddress?.state},
              {deliveryAddress?.country}
            </p>
          </li>
        )}
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
                    {!checkInWishlist(wishlistData, item) && (
                      <button
                        className="card-cart btn btn-outline "
                        onClick={() => {
                          wishlistDataHandler(item);
                          removeFromCartHandler(item);
                        }}
                      >
                        move to wishlist
                      </button>
                    )}
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
