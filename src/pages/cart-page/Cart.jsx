import React, { useEffect } from "react";
import { CartPriceCard, CartProductCard } from "../../components";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import "./Cart.css";

export function Cart() {
  const { getCart, state } = useCart();
  useTitle("Cart");
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="grid-layout-cart">
      {state.cartData.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png"
            alt="empty-cart"
          />
        </div>
      ) : (
        <>
          <CartProductCard />
          <CartPriceCard />
        </>
      )}
    </div>
  );
}
