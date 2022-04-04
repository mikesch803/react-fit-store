import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, FilterContext, LoginContext, WishlistContext } from "../../context";
import { CartIcon, SearchIcon, WishlistIcon } from "../../icons/icons";
import "./Header.css";
export function Header() {
  const { wishlistData, setWishlistData } = useContext(WishlistContext);
  const { state } = useContext(CartContext);
  const { dispatch } = useContext(FilterContext);
  const {login, logoutHandler} = useContext(LoginContext)
  return (
    <header className="header">
      <div className="navbar">
        <h1 className="navbar-title">
          <Link to="/" onClick={() => dispatch({ type: "CLEAR" })}>
            Fit Store
          </Link>
        </h1>
        <div className="navbar-search">
          <input type="text" placeholder="search..." className="navbar-input" />
          <SearchIcon />
        </div>
        <div className="navbar-icons">
          {localStorage.token?  <button className="btn btn-link navbar-login" onClick={logoutHandler}>
            logout
          </button> : <Link to="/login" className="btn btn-link navbar-login">
            login
          </Link>} 
          {/* <Link to="/login" className="btn btn-link navbar-login">
            login
          </Link> */}
          <Link to="/shop" className="btn btn-link navbar-shop">
            shop
          </Link>

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
    </header>
  );
}
