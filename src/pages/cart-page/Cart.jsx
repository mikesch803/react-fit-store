import axios from "axios";
import React, { useEffect } from "react";
import { CartPriceCard, CartProductCard } from "../../components";
import { useCart } from "../../context";
import "./Cart.css";

export function Cart() {
  const {
    dispatch,
  } = useCart()

  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: {
            authorization: encodedToken,
          },
        });
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
