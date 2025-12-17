import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Preview</p>
        <h1 className="gradient-text">Financial infrastructure<br/> to grow your<br/> revenue</h1>
        <p className="hero-subtitle">
          Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
        </p>
        <div className="hero-actions">
          <button className="btn" style={{backgroundColor:"#1a123fff", color:"white"}}>request an invite</button>
          {/* <button className="btn btn-ghost">Contact sales</button> */}
        </div>
        {/* <p className="hero-note">
          Use Stripe to handle all of your payments-related needs, manage
          revenue operations, and launch new business models.
        </p> */}
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="hero-card-header">
            <span>Revenue overview</span>
            <span className="pill">AI insights</span>
          </div>
          <div className="hero-card-body">
            <div className="metric">
              <span className="metric-label">Monthly volume</span>
              <span className="metric-value">₹4.2M</span>
            </div>
            <div className="metric">
              <span className="metric-label">Authorization rate</span>
              <span className="metric-value positive">+3.4%</span>
            </div>
            <div className="chart-placeholder">
              <div className="bar bar-1" />
              <div className="bar bar-2" />
              <div className="bar bar-3" />
              <div className="bar bar-4" />
            </div>
          </div>
        </div>

        <div className="hero-pill-column">
          <div className="pill-card">Local payment methods</div>
          <div className="pill-card">Fraud detection with AI</div>
          <div className="pill-card">Subscriptions & billing</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
