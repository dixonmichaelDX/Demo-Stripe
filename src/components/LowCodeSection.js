import React from "react";
import "./LowCodeSection.css";

const LowCodeSection = () => {
  return (
    <section className="lowcode">
      {/* angled separators to match Stripe band */}
      <div className="lowcode__skew lowcode__skew--top" />
      <div className="lowcode__skew lowcode__skew--bottom" />

      <div className="lowcode__inner">
        {/* top text */}
        <header className="lowcode__header">
          <p className="lowcode__eyebrow">Launch with ease</p>
          <h2 className="lowcode__title">
            Low‑ and no‑code options for
            <br />
            getting started
          </h2>
          <p className="lowcode__text">
            If you’d like to use Stripe for your business but don’t have
            developers on staff, no problem. We have a few options depending on
            your needs.
          </p>
        </header>

        {/* three cards */}
        <div className="lowcode__cards">
          <article className="lc-card">
            <div className="lc-card__icon-row">
              <div className="lc-pill lc-pill--blue">Stripe</div>
              <div className="lc-pill lc-pill--dark">Apps</div>
              <div className="lc-pill lc-pill--light">Platforms</div>
            </div>
            <h3 className="lc-card__title">Use a pre‑integrated platform</h3>
            <p className="lc-card__text">
              Explore our directory of 100+ out‑of‑the‑box solutions that
              connect with Stripe, such as Squarespace and Lightspeed.
            </p>
          </article>

          <article className="lc-card">
            <div className="lc-avatar-row">
              <div className="lc-avatar">S</div>
              <div className="lc-avatar lc-avatar--outline">C</div>
              <div className="lc-avatar lc-avatar--ghost">✓</div>
            </div>
            <h3 className="lc-card__title">Build with Stripe‑certified experts</h3>
            <p className="lc-card__text">
              Work with a Stripe consulting partner that can design, build, and
              deploy your Stripe solution for you.
            </p>
          </article>

          <article className="lc-card">
            <div className="lc-card__mock">
              <div className="lc-mock__header">
                <span className="lc-mock__label">Good afternoon</span>
                <span className="lc-mock__amount">₹19.99</span>
              </div>
              <div className="lc-mock__field" />
              <div className="lc-mock__button" />
            </div>
            <h3 className="lc-card__title">Try our no‑code products</h3>
            <p className="lc-card__text">
              Set up usage‑based billing, accept simple one‑time payments, or
              power a full checkout flow directly from your Dashboard in
              minutes—no code required.
            </p>
          </article>
        </div>

        {/* bottom 3‑column row */}
        <div className="lowcode__bottom">
          <div className="lowcode__col">
            <h3>Ready to get started?</h3>
            <p>
              Create an account instantly and start accepting payments. Contact
              our sales team to design a custom package for your business.
            </p>
            <div className="lowcode__buttons">
              <button className="lowcode-btn lowcode-btn--primary">
                Dashboard
              </button>
              <button className="lowcode-btn lowcode-btn--ghost">
                Contact sales
              </button>
            </div>
          </div>

          <div className="lowcode__col">
            <h3>Have questions?</h3>
            <p>
              We can help you explore use cases, pricing, and implementation
              approaches.
            </p>
            <button className="lowcode__link">Pricing details ›</button>
          </div>

          <div className="lowcode__col">
            <h3>Start your integration</h3>
            <p>
              Get up and running with Stripe in as little as 10 minutes using
              our APIs and tools.
            </p>
            <button className="lowcode__link">API reference ›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowCodeSection;
