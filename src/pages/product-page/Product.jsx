import React, { useContext } from "react";
import { Aside, Header } from "../../components";
import "./Product.css";
import { HeartIcon, RatingIcon, WishlistIcon } from "../../icons/icons";
import { FilterContext, WishlistContext } from "../../context";

export function Product() {
  const { getSortedArr } = useContext(FilterContext);
  const { wishlistDataHandler, wishlistData } = useContext(WishlistContext);
  return (
    <div className="grid-layout-product">
      <Header />
      <Aside />
      <section className="product">
        <h2 className="product-section-title txt-left">Showing all products</h2>
        <div className="product-component">
          <ul className="product-list">
            {getSortedArr.map((item) => {
              const { src, title, brand, offer_price, mrp, _id, rating } = item;
              return (
                <li key={_id}>
                  <div className="card card-vrt card-dismis">
                    <div className="card-img-container">
                      <img className="card-img" src={src} alt={title} />
                    </div>
                    <div className="card-desc txt-left">
                      <h3 className="card-desc-title">
                        {title}
                        <span className=" rating-num">
                          {rating}
                          <RatingIcon />
                        </span>
                      </h3>
                      <p>by {brand}</p>
                      <span className="card-price">Rs {offer_price}</span>
                      <del className="card-mrp">Rs {mrp}</del>
                      <div className="card-btns ">
                        <button className="card-cart btn btn-primary ">
                          add to cart
                        </button>
                      </div>
                    </div>
                    <div className="card-dismis-btn"
                      onClick={() => wishlistDataHandler(item)}
                    >
                      {wishlistData.includes(item) ? (
                        <HeartIcon />
                      ) : (
                        <WishlistIcon />
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
