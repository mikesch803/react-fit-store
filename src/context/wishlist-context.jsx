import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ToastContext } from "./toast-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const encodedToken = localStorage.getItem("token");
  const {setToastMsg, setToastState } =
    useContext(ToastContext);

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
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      } catch (err) {
        console.log(err);
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
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistDataHandler,
        wishlistData,
        setWishlistData
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
