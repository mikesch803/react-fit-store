import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CartProvider } from "./context/cart-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        
          <CartProvider>
          <WishlistProvider>
            <App />
            </WishlistProvider>
          </CartProvider>
        
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

makeServer();
