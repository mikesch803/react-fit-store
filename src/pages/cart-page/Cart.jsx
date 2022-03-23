import axios from "axios";
import React, { useContext, useEffect } from "react";
import { WishlistContext } from "../../context";
import { CartContext } from "../../context/cart-context";
import "./Cart.css";

export function Cart() {
  const { state, dispatch } = useContext(CartContext);
  // const [qty, setQty] = useState(1);
  // const encodedToken = localStorage.getItem("token");
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const result = await axios.get("/api/user/cart",  {headers: {
  //         authorization: encodedToken,
  //       },})
  //       console.log(result)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, [encodedToken]);

  const { wishlistDataHandler } = useContext(WishlistContext);
  return (
    <div className="grid-layout-cart">
      <section className="section-cart-left">
        <h3>My cart ({state.cartData.length})</h3>
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
                    <label htmlFor="qty">Quantity</label>
                    <select
                      name="quantity"
                      id="qty"
                      // onChange={(e) => setQty(Number(e.target.value))}
                      value={qty}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                    <div className="card-btns card-btns-hz">
                      <span
                        className=" card-dismis-btn "
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: item })
                        }
                      >
                        &times;
                      </span>
                      <button
                        className="card-cart btn btn-outline "
                        onClick={() => {
                          wishlistDataHandler(item);
                          dispatch({ type: "REMOVE_FROM_CART", payload: item });
                        }}
                      >
                        move to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="section-cart-right">
        <div className="cart-price-detail">
          <h3>Price details</h3>
          <div className="card card-vrt card-txt">
            <p>
              Price ({state.cartData.length}){" "}
              <span>
                Rs {state.cartData.reduce((acc, curr) => acc + curr.mrp, 0)}
              </span>
            </p>
            <p>
              Discount{" "}
              <span>
                Rs{" "}
                {state.cartData.reduce((acc, curr) => acc + curr.mrp, 0) -
                  state.cartData.reduce(
                    (acc, curr) => acc + curr.offer_price,
                    0
                  )}
              </span>
            </p>
            <p>
              Delivery charges <span>Rs 100</span>
            </p>
            <h3>
              Total Amount{" "}
              <span>
                {state.cartData.reduce(
                  (acc, curr) => acc + curr.offer_price,
                  0
                ) + 100}
              </span>
            </h3>
            <p>
              you will save Rs{" "}
              {state.cartData.reduce((acc, curr) => acc + curr.mrp, 0) -
                state.cartData.reduce(
                  (acc, curr) => acc + curr.offer_price,
                  0
                )}{" "}
              on this order
            </p>
            <div className="card-btns">
              <button className="card-cart btn btn-primary">place order</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
