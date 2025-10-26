import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="appear-up">Taste of Italy</h1>
          <p className="appear-up delay-1">Authentic espresso, fresh pasta, and warm hospitality.</p>
          <div className="hero-actions appear-up delay-2">
            <button className="btn primary">See Menu</button>
            <button className="btn outline">Reserve</button>
          </div>
        </div>
        <div className="hero-image appear-right">
          <img src="/src/assets/itallianCoffe.jpg" alt="Italian coffee" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
