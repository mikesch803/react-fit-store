import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../context";
import axios from "axios";

export function LandingPage() {
  const { dispatch } = useFilter();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setBrands(response.data.categories);
        dispatch({ type: "CLEAR" });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
              <li>
                <Link to="/shop" key={_id}>
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
