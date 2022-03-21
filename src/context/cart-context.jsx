import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart-reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    addToCartToggle: false,
    cartData: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider, CartContext };
