import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { CartProvider, FilterProvider, LoginProvider, WishlistProvider } from "./context";
import {  ToastProvider } from "./context/toast-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
      <LoginProvider>
        <FilterProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </LoginProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

makeServer();
