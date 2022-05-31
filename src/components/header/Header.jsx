import React from "react";
import { Link } from "react-router-dom";
import { useCart, useFilter, useLogin, useWishlist } from "../../context";
import { CartIcon, SearchIcon, UserIcon, WishlistIcon } from "../../icons/icons";
import "./Header.css";
export function Header() {
  const { wishlistData } = useWishlist();
  const { state } = useCart();
  const { dispatch } = useFilter();
  const { login } = useLogin();
  return (
      <div className="navbar">
        <h1 className="navbar-title navbar-child">
          <Link to="/" onClick={() => dispatch({ type: "CLEAR" })}>
            Fit Store
          </Link>
        </h1>
        <div className="navbar-search navbar-child">
          <input type="text" placeholder="search products, brands..." className="navbar-input"  onChange={(e)=>dispatch({type:"SEARCH", payload:e.target.value})}/>
          <SearchIcon />
        </div>
        <div className="navbar-icons navbar-child">
          <Link to="/shop" className="btn navbar-shop">
            shop
          </Link>
          {localStorage.token ? (
            <Link to="/profile" className="btn navbar-login">
            <UserIcon/>
          </Link>
          ) : (
            <Link to="/login" className="btn btn-link navbar-login">
              <UserIcon/>
            </Link>
          )}

          <Link to="/wishlist" className="bg btn btn-link navbar-wishlist">
            <WishlistIcon />
            <span className="bg-num">{login && wishlistData.length}</span>
          </Link>

          <Link to="/cart" className="bg btn btn-link navbar-cart">
            <CartIcon />
            <span className="bg-num">{login && state.cartData.length}</span>
          </Link>
        </div>
      </div>
  );
}
