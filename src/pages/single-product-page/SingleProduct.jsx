import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useCart, useFilter, useWishlist } from "../../context";
import { RatingIcon } from "../../icons/icons";
import { checkInCart, checkInWishlist } from "../../utils/functions";
import "./SingleProduct.css";
export function SingleProduct() {
  const { ProductId } = useParams();
  const { getCurrentProductHandler, currentProduct } = useFilter();
  const { wishlistDataHandler, wishlistData } = useWishlist();
  const { state, addToCartHandler } = useCart();

  useEffect(() => {
    getCurrentProductHandler(ProductId);
  }, []);

  if (currentProduct === null) {
    return <Navigate to="/shop" />;
  }

  return (
    <div className="single-product-page">
      <div className="product-img">
        <img src={currentProduct.src} alt={currentProduct.title} />
      </div>

      <div className="product-details">
        <h2>{currentProduct.title}</h2>
        <p>{currentProduct.brand}</p>
        <p className="rating-num">
          {currentProduct.rating} <RatingIcon />
        </p>
        <h1>
          {currentProduct.offer_price}
          <del className="ft-w-300 ft-grey">{currentProduct.mrp}</del>
        </h1>
        {checkInCart(state.cartData, currentProduct) ? (
          <Link to="/cart" className="btn btn-primary txt-center">
            go to cart
          </Link>
        ) : (
          <button
            className="btn btn-primary "
            onClick={() => addToCartHandler(currentProduct)}
          >
            add to cart
          </button>
        )}
        <button className="btn btn-outline"     onClick={() => wishlistDataHandler(currentProduct)}>{checkInWishlist(wishlistData, currentProduct) ? `remove from wishlist` : `add to wishlist`}</button>
      </div>
    </div>
  );
}
