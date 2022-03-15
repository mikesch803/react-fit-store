import React from "react";
import "./LandingPage.css";
import { landingPoster, product1, product2 } from "../../assests/images";
import { Footer, Header } from "../../components";

export function LandingPage() {
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
      <section className="section-bottom-left">
        <img src={product1} alt="protein-powder" className="img-bottom-left" />
        <div>
          <p className="ft-w-400 ft-grey">My Protein</p>
          <p className="ft-w-400 ft-grey">New Arrivals</p>
        </div>
      </section>
      <section className="section-bottom-mid">
        <img src={product2} alt="protein-powder" className="img-bottom-mid" />
        <div>
          <p className="ft-w-400 ft-grey">My Protein</p>
          <p className="ft-w-400 ft-grey">New Arrivals</p>
        </div>
      </section>
      <section className="section-bottom-right">
        <img src={product1} alt="protein-powder" className="img-bottom-right" />
        <div>
          <p className="ft-w-400 ft-grey">My Protein</p>
          <p className="ft-w-400 ft-grey">New Arrivals</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
