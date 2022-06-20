import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useToast } from "./toast-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [wishlistData, setWishlistData] = useState([]);
  const { toastHandler } = useToast();

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
          toastHandler("Product removed from wishlist", "alert-success");
        }
      } catch (err) {}
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

          toastHandler("Product added to wishlist", "alert-success");
        }
      } catch (err) {
        if (err.response.status === 500) {
          toastHandler("Login first", "alert-warning");
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
