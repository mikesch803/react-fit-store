import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");

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
      }
    } catch (err) {
      console.log(err);
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
      }
    } catch (err) {
      console.log(err);
    }
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
      }
    } catch (err) {
      console.log(err);
    }
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
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [state, dispatch] = useReducer(cartReducer, {
    addToCartToggle: false,
    cartData: []
  });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCartHandler,
        removeFromCartHandler,
        removeProductQtyHandler,
        addProductQtyHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider, CartContext };
