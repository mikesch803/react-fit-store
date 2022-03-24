import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  //const encodedToken = localStorage.getItem("token");
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const result = await axios.post("/api/user/cart",  {headers: {
  //         authorization: encodedToken,
  //       },})
  //       console.log(result)
  //       if(result.status === 200){
  //         dispatch({type:"ADD_TO_CART"})
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, [encodedToken]);

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
