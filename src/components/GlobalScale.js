// GlobalScale.jsx
import React from "react";
import "./GlobalScale.css";

const GlobalScale = () => {
  return (
    <section className="global-scale">
      <div className="global-scale__content">
        <p className="global-scale__eyebrow">Global scale</p>
        <h2 className="global-scale__title">
          The backbone for
          <br />
          global commerce
        </h2>
        <p className="global-scale__description">
          Stripe makes moving money as easy and programmable as moving data.
          Our teams are based in offices around the world and we process
          hundreds of billions of dollars each year for ambitious businesses
          of all sizes.
        </p>
      </div>

      <div className="global-scale__stats">
        <div className="stat">
          <p className="stat__value">500M+</p>
          <p className="stat__label">
            API requests per day, peaking at 13,000 requests a second.
          </p>
        </div>
        <div className="stat">
          <p className="stat__value">99.999%</p>
          <p className="stat__label">
            Historical uptime for Stripe services.
          </p>
        </div>
        <div className="stat">
          <p className="stat__value">47+</p>
          <p className="stat__label">
            Countries with local acquiring.
          </p>
        </div>
        <div className="stat">
          <p className="stat__value">135+</p>
          <p className="stat__label">
            Currencies and payment methods supported.
          </p>
        </div>
      </div>
  <div className="global-globe" />

      <div className="global-scale__decor" />
    </section>
  );
};

export default GlobalScale;
