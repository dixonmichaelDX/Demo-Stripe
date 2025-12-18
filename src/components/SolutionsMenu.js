import React from "react";
import "./SolutionsMenu.css";

const SolutionsMenu = () => {
  return (
    <div className="sol-menu">
      <section className="sol-section">
        <h4 className="sol-heading">By stage</h4>
        <div className="sol-row">
          <button className="sol-pill">Enterprises</button>
          <button className="sol-pill">Startups</button>
        </div>
      </section>
      <section className="sol-section">
        <h4 className="sol-heading">By use case</h4>
        <div className="sol-columns">
          <div className="sol-col">
            <button className="sol-link">Agentic commerce</button>
            <button className="sol-link">Crypto</button>
            <button className="sol-link">E‑commerce</button>
            <button className="sol-link">Embedded finance</button>
            <button className="sol-link">Finance automation</button>
          </div>
          <div className="sol-col">
            <button className="sol-link">Global businesses</button>
            <button className="sol-link">In‑app payments</button>
            <button className="sol-link">Marketplaces</button>
            <button className="sol-link">Platforms</button>
            <button className="sol-link">SaaS</button>
          </div>
        </div>
      </section>
      <section className="sol-section">
        <h4 className="sol-heading">By industry</h4>
        <div className="sol-columns">
          <div className="sol-col">
            <button className="sol-link">AI companies</button>
            <button className="sol-link">Creator economy</button>
            <button className="sol-link">
              Hospitality, travel and leisure
            </button>
            <button className="sol-link">Insurance</button>
          </div>
          <div className="sol-col">
            <button className="sol-link">Media and entertainment</button>
            <button className="sol-link">Non‑profits</button>
            <button className="sol-link">Retail</button>
          </div>
        </div>
      </section>
      <section className="sol-section sol-section--last">
        <h4 className="sol-heading">Ecosystem</h4>
        <div className="sol-row">
          <button className="sol-pill">Stripe App Marketplace</button>
          <button className="sol-pill">Partners</button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsMenu;
