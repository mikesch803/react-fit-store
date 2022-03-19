import React, { useContext, useEffect, useState } from "react";
import { Aside, Header } from "../../components";
import "./Product.css";
import axios from "axios";
import { FilterContext } from "../../context/filter-context";

export function Product() {
  
  const {getSortedArr } = useContext(FilterContext);

  return (
    <div className="grid-layout-product">
      <Header />
      <Aside />
      <section className="product">
        <h2 className="product-section-title txt-left">Showing all products</h2>
        <div className="product-component">
          <ul className="product-list">
            {getSortedArr.map((item) => {
              return (
                <li key={item._id}>
                  <div className="card card-vrt">
                    <div className="card-img-container ">
                      <img
                        className="card-img"
                        src={item.src}
                        alt={item.title}
                      />
                    </div>
                    <div className="card-desc txt-left">
                      <h3>{item.title}</h3>
                      <p>by {item.brand}</p>
                      <span className="card-price">Rs {item.offer_price}</span>
                      <del className="card-mrp">Rs {item.mrp}</del>
                      <div className="card-btns ">
                        <button className="card-cart btn btn-primary ">
                          add to cart
                        </button>
                        <button className="card-wishlist btn btn-outline">
                          wishlist
                        </button>
                      </div>
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
