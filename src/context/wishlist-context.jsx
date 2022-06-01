import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ToastContext } from "./toast-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [wishlistData, setWishlistData] = useState([]);

  const { setToastMsg, setToastState, setToastStyles } =
    useContext(ToastContext);

  const getWishlist = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });

      if (response.status === 200) {
        setWishlistData(response.data.wishlist);
      }
    } catch (err) {}
  };

  const wishlistDataHandler = async (product) => {
    const itemIndex = wishlistData.findIndex(
      (item) => item._id === product._id
    );
    if (itemIndex !== -1) {
      try {
        const response = await axios.delete(
          `/api/user/wishlist/${product._id}`,
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
          setWishlistData(response.data.wishlist);
          setToastState(true);
          setToastMsg("Product is removed from wishlist");
          setToastStyles("alert alert-danger");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      } catch (err) {
      }
    } else {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 201) {
          setWishlistData(response.data.wishlist);
          setToastState(true);
          setToastMsg("Product is added to wishlist");
          setToastStyles("alert alert-success");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      } catch (err) {
        if (err.response.status === 500) {
          setToastState(true);
          setToastMsg("Login first");
          setToastStyles("alert alert-warning");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      }
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistDataHandler,
        wishlistData,
        setWishlistData,
        getWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, WishlistContext, useWishlist };
