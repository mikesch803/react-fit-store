import React, { useEffect } from "react";
import { CartPriceCard, CartProductCard } from "../../components";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import "./Cart.css";

export function Cart() {
  const { getCart,
  } = useCart()
  useTitle('Cart')
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="grid-layout-cart">
      <CartProductCard />
      <CartPriceCard />
    </div>
  );
}
