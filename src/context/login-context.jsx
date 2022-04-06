import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useCart } from "./cart-context";
import { useToast } from "./toast-context";
import { useWishlist } from "./wishlist-context";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const { setWishlistData } = useWishlist();
  const { dispatch } = useCart();
  const { setToastMsg, setToastState, setToastStyles } = useToast();
  const [login, setLogin] = useState(localStorage?.token ? true : false);
  const logoutHandler = () => {
    localStorage.clear();
    setLogin(false);
    setWishlistData([]);
    dispatch({ type: "RESET" });
    setToastState(true);
    setToastMsg("logout sucessfully");
    setToastStyles("alert alert-success");
    setTimeout(() => {
      setToastState(false);
    }, 1500);
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        setLogin(true);
        setToastState(true);
        setToastMsg("Signin sucessfully");
        setToastStyles("alert alert-success");
        setTimeout(() => {
          setToastState(false);
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{ login, setLogin, logoutHandler, guestLoginHandler }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginContext, LoginProvider, useLogin };
