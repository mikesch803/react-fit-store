import { createContext, useContext, useState } from "react";
import { CartContext } from "./cart-context";
import { WishlistContext } from "./wishlist-context";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const { setWishlistData } = useContext(WishlistContext);
  const { dispatch } = useContext(CartContext);
  const [login, setLogin] = useState(localStorage?.token?true:false);
  const logoutHandler = () => {
    localStorage.clear();
    setLogin(false);
    setWishlistData([]);
    dispatch({ type: "RESET" });
  };
  return (
    <LoginContext.Provider value={{ login, setLogin, logoutHandler }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
