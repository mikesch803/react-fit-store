import React, { useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export function LandingPage() {
  const { getAllCategories, brands } = useFilter();
  const { dispatch } = useFilter();
  useEffect(() => {
    getAllCategories();
  }, []);
  useTitle("Online Ecommerce Site");
  return (
    <div className="grid-layout-home">
      <main className="main-home">
        <img
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/Banner_1_1950x.png?v=1637743062"
          alt="landing-poster"
          className="img-resp"
        />
        <h2 className="txt-center brand-heading">Feature Brands</h2>
        <ul className="section-brands">
          {brands.map((item) => {
            const { brand, src, _id } = item;
            return (
              <li key={_id}>
                <Link to="/shop">
                  <div
                    className="card card-vrt"
                    onClick={() => dispatch({ type: "BRAND", payload: brand })}
                  >
                    <div className="card-img-container">
                      <img className="card-img" src={src} alt="brands" />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
