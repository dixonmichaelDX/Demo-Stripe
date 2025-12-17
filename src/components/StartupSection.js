import React from "react";
import "./StartupSection.css";

const StartupSection = () => {
  return (
    <section className="startup">
      <div className="startup__inner">
        {/* TOP: TEXT CONTENT */}
        <div className="startup__left">
          <p className="startup__eyebrow">Built for growth</p>
          <h2 className="startup__title">Take your start‑up further, faster</h2>
          <p className="startup__text">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API‑based
            integration or use our low‑ to no‑code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
        </div>

        {/* BOTTOM: CARDS GRID */}
        <div className="startup__right">
          {/* Atlas card */}
          <article className="card card--atlas">
            <header className="card__header">
              <span className="badge">Atlas</span>
              <span className="card__title">RocketRides, Inc.</span>
            </header>
            <div className="card__body card__body--two-col">
              <ul className="card__list">
                <li>Overview</li>
                <li>Company</li>
                <li>Templates</li>
                <li>Partners</li>
              </ul>
              <ul className="card__list card__list--checks">
                <li>Incorporate your company</li>
                <li>Stock issued for founders</li>
                <li>Purchase your shares</li>
                <li>File 83(b) election</li>
                <li>Open a bank account</li>
              </ul>
            </div>
            <footer className="card__footer">
              <span className="badge badge--soft">Atlas</span>
              <span className="card__footer-text">
                Incorporate your company
              </span>
            </footer>
          </article>

          {/* QR / chat card */}
          <article className="card card--qr">
            <div className="card--qr__chat">
              <div className="chat-bubble chat-bubble--light">
                Anything I can help with today?
              </div>
              <div className="chat-bubble chat-bubble--dark">
                Sure, I’m ready. Can I pay just for usage?
              </div>
            </div>
            <div className="card--qr__box">
              <div className="card--qr__price">₹19.99</div>
              <div className="card--qr__label">per month</div>
              <div className="card--qr__code" />
              <div className="card--qr__scan">Scan to pay</div>
            </div>
            <footer className="card__footer card__footer--qr">
              <span className="badge badge--soft">Payment Links</span>
              <span className="card__footer-text">Validate your idea</span>
            </footer>
          </article>

          {/* Email card */}
          <article className="card card--email">
            <header className="card__header">
              <span className="card__title">Email</span>
              <span className="card__sub">nawal@rocketrides.com</span>
            </header>
            <div className="card__body">
              <p className="card__label">Card information</p>
              <div className="card--email__row">
                <div className="card--email__number">1234 1234 1234 1234</div>
                <div className="card--email__meta">MM/YY · CVC</div>
              </div>
              <div className="card--email__brands">
                <span className="brand-pill">VISA</span>
                <span className="brand-pill">MC</span>
                <span className="brand-pill">UPI</span>
              </div>
            </div>
          </article>

          {/* Chart card */}
          <article className="card card--chart">
            <header className="card__header">
              <span className="card__title">Cloud token</span>
              <span className="card__sub">
                Projected: 80,250,068 · Current: 84,491,244
              </span>
            </header>
            <div className="card__body card--chart__body">
              <div className="chart-bars">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="chart-bar"
                    style={{ height: `${50 + i * 5}px` }}
                  />
                ))}
              </div>
              <div className="chart-axis">
                <span>24 Apr</span>
                <span>26 Apr</span>
                <span>28 Apr</span>
                <span>30 Apr</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
