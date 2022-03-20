import { createContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);

  const wishlistDataHandler = (item) => {
    if (wishlistData.includes(item)) {
      setWishlistData(wishlistData.filter((product) => product !== item));
    } else {
      setWishlistData([...wishlistData, item]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlistDataHandler, wishlistData }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
