import React, { useContext } from "react";
import "./LandingPage.css";
import { landingPoster } from "../../assests/images";
import { Footer, Header } from "../../components";
import { brandLogoData } from "../../data/home-page-data/home.data";
import { FilterContext } from "../../context/filter-context";
import { Link } from "react-router-dom";

export function LandingPage() {
  const { dispatch } = useContext(FilterContext);

  return (
    <div className="grid-layout-home">
      <Header />
      <main className="main-home">
        <img src={landingPoster} alt="landing-poster" className="img-resp" />
        <div className="main-txt">
          <h1 className="ft-w-400 txt-center">New in Sale</h1>
          <h2 className="ft-w-300 ft-grey txt-center">
            Upto to 50% in all brands
          </h2>
        </div>
      </main>

      <section className="section-home">
        <h2 className="txt-center brand-heading">Feature Brands</h2>
        <div className="section-brands">
          {brandLogoData.map((item) => {
            const { brand, src } = item;
            return (
              <Link to="/shop" key={brand}>
                <div
                  className="card card-vrt"
                  onClick={() => dispatch({ type: "BRAND", payload: brand })}
                >
                  <div className="card-img-container">
                    <img className="card-img" src={src} alt="brands" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
