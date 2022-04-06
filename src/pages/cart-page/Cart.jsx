import axios from "axios";
import React, { useContext, useEffect } from "react";
import { CartPriceCard, CartProductCard } from "../../components";
import { Toast } from "../../components/toast/Toast";
import { useCart, ToastContext } from "../../context";
import "./Cart.css";

export function Cart() {
  const {
    dispatch,
  } = useCart()

  const {
  toastState
  } = useContext(ToastContext)

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
      {toastState && <Toast/>}
      <CartProductCard />
      <CartPriceCard />
    </div>
  );
}
