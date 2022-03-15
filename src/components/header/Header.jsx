import React from "react";
import { Link } from "react-router-dom";
import { CartIcon, WishlistIcon } from "../../icons/icons";
import "./Header.css";
export function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <h1 className="navbar-title">

          <Link to="/">Fit Store</Link>
        </h1>
        <div className="navbar-search">
          <input type="text" placeholder="search..." className="navbar-input" />
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="navbar-search-icon"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            ></path>
          </svg>
        </div>
        <div className="navbar-icons">
          <Link to="/login" className="btn btn-link navbar-login">
            login
          </Link>
          <Link to="/shop" className="btn btn-link navbar-shop">shop</Link>

          <Link to="/wishlist" className="bg btn btn-link navbar-wishlist">
            <WishlistIcon/>
            <span className="bg-num">2</span></Link>


          <Link to="/cart" className="bg btn btn-link navbar-cart">
            <CartIcon/>
            <span className="bg-num">7</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
