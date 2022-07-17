import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart, useFilter, useLogin, useWishlist } from "../../context";
import { CartIcon, SearchIcon, UserIcon, WishlistIcon } from "../../icons/icons";
import "./Header.css";
export function Header() {
  const { wishlistData } = useWishlist();
  const { state } = useCart();
  const { dispatch } = useFilter();
  const { login } = useLogin();
  const [searchText, setSearchText] = useState();
  
  function searchHandler()  {
    dispatch({type:"SEARCH", payload:searchText})
  }

   const debounce = (fn,delay)=>{
    let timer ;
    return function(){
      clearTimeout(timer);
      timer = setTimeout(()=>{
            fn()
      },delay)
    }
  }

  const debounceFunc = debounce(searchHandler, 3000);

  useEffect(()=>{
    debounceFunc()
  },[searchText])

  return (
      <div className="navbar">
        <h1 className="navbar-title navbar-child">
          <Link to="/" onClick={() => dispatch({ type: "CLEAR" })}>
            Fit Store
          </Link>
        </h1>
        <div className="navbar-search navbar-child">
          <input type="text" placeholder="search products, brands..." className="navbar-input" onChange={(e)=>setSearchText(e.target.value)}/>
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
            {wishlistData.length > 0 && <span className="bg-num">{login && wishlistData.length>9?9+'+':wishlistData.length}</span>}
          </Link>

          <Link to="/cart" className="bg btn btn-link navbar-cart">
            <CartIcon />
            {state.cartData.length > 0 && <span className="bg-num">{login && state.cartData.length>9?9+"+":state.cartData.length}</span>}
          </Link>
        </div>
      </div>
  );
}
