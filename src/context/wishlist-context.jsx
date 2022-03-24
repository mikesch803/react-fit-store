import axios from "axios";
import { createContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);

  const encodedToken = localStorage.getItem("token");

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
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistDataHandler, wishlistData, setWishlistData }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
