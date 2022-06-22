import React from "react";
import { useCart, useToast } from "../../context";
import { useNavigate } from "react-router-dom";
import {
  allProductTotalDiscount,
  allProductTotalMrp,
  allProductTotalOfferPrice,
} from "../../utils/functions";
import { default as logo } from "../../assests/images/logo.png";
export function CartPriceCard() {
  const { state, clearCart } = useCart();
  const { toastHandler } = useToast();
  const navigate = useNavigate();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const placeOrderHandler = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_9Di64EOn3x67km",
      currency: "INR",
      amount: amount * 100,
      name: "Fit store",
      description: "Thanks for purchasing",
      image: `${logo}`,

      handler: function (response) {
        alert(response.razorpay_payment_id);
        toastHandler("Payment successful ", "alert-success");
        clearCart();
        navigate("/shop");
      },
      prefill: {
        name: "Mahendra Chauhan",
        email: "mahendra@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section className="section-cart-right">
      {state.cartData.length !== 0 && (
        <div className="cart-price-detail">
          <h3 className="txt-left">Price details</h3>
          <div className="card card-vrt card-txt card-price">
            <p>
              Price ({state.cartData.length}){" "}
              <span>Rs {allProductTotalMrp(state.cartData)}</span>
            </p>
            <p>
              Discount <span>Rs {allProductTotalDiscount(state.cartData)}</span>
            </p>
            <p>
              Delivery charges <span>Rs 100</span>
            </p>
            <h3>
              Total Amount{" "}
              <span>{allProductTotalOfferPrice(state.cartData) + 100}</span>
            </h3>
            <p>
              you will save Rs {allProductTotalDiscount(state.cartData)}
              on this order
            </p>
            <div className="card-btns">
              <button
                className="card-cart btn btn-primary"
                onClick={() =>
                  placeOrderHandler(
                    allProductTotalOfferPrice(state.cartData) + 100
                  )
                }
              >
                place order
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
