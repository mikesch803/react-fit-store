import axios from "axios";
import React, { useContext, useEffect } from "react";
import { CartPriceCard, CartProductCard } from "../../components";
// import { CartPriceCard } from "../../components/cart-price-card/CartPriceCard";
// import { CartProductCard } from "../../components/cart-product-card/CartProductCard";
import { CartContext } from "../../context/cart-context";
import "./Cart.css";

export function Cart() {
  const {
    dispatch,
  } = useContext(CartContext);

  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: {
            authorization: encodedToken,
          },
        });
        console.log("getting cart ", response);
        if (response.status === 200) {
          dispatch({ type: "SET_CART", payload: response.data.cart });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [encodedToken, dispatch]);

  return (
    <div className="grid-layout-cart">
      <CartProductCard />
      <CartPriceCard />
    </div>
  );
}
