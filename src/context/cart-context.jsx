import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";
import { useToast } from "./toast-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { toastHandler } = useToast();
  const encodedToken = localStorage.getItem("token");

  const getCart = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "SET_CART", payload: response.data.cart });
      }
    } catch (err) {}
  };

  const addToCartHandler = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product: item,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        dispatch({ type: "SET_CART", payload: response.data.cart });
        toastHandler("Product is added to cart", "alert-success");
      }
    } catch (err) {
      if (err.response.status === 500) {
        toastHandler("Login first", "alert-warning");
      }
    }
  };

  const removeFromCartHandler = async (item) => {
    try {
      const response = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "SET_CART", payload: response.data.cart });
        toastHandler("Product is removed from cart", "alert-danger");
      }
    } catch (err) {}
  };

  const addProductQtyHandler = async (item) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        dispatch({ type: "SET_QTY", payload: response.data.cart });
        toastHandler("quantity updated", "alert-success");
      }
    } catch (err) {}
  };

  const removeProductQtyHandler = async (item) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        dispatch({ type: "SET_QTY", payload: response.data.cart });
        toastHandler("Quantity updated", "alert-success");
      }
    } catch (err) {}
  };

  const clearCart = async () => {
    try {
      const response = await axios.delete("/api/user/cart/all", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "RESET" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [state, dispatch] = useReducer(cartReducer, {
    addToCartToggle: false,
    cartData: [],
  });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        getCart,
        addToCartHandler,
        removeFromCartHandler,
        removeProductQtyHandler,
        addProductQtyHandler,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider, CartContext };
