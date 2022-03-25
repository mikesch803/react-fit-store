import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";
import { ToastContext } from "./toast-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const { toastMsg, setToastMsg, toastState, setToastState } =
    useContext(ToastContext);
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
        setToastState(true);
        setToastMsg("Product is added to cart");
        setTimeout(() => {
          setToastState(false);
        }, 1500);
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
        setToastState(true);
        setToastMsg("Product is removed from cart");
        setTimeout(() => {
          setToastState(false);
        }, 1500);
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
        setToastState(true);
        setToastMsg(`Quantity for ${item.title} is ${item.qty + 1}`);
        setTimeout(() => {
          setToastState(false);
        }, 1500);
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
        setToastState(true);
        setToastMsg(`Quantity for ${item.title} is ${item.qty - 1}`);
        setTimeout(() => {
          setToastState(false);
        }, 1500);
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
        toastState,
        toastMsg
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider, CartContext };
