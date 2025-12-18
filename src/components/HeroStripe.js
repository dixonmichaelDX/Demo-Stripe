import React from "react";
import "./HeroStripe.css";

const HeroStripe = () => {
  return (
    <section className="hs-simple page-section hero-section">
      <div className="hs-simple__inner">
        <div className="hs-left">
          <span
            className="hs-pill"
            style={{ position: "relative", top: "20px" }}
          >
            Preview
          </span>
          <h1 className="hs-title hs-title--gradient">
            Financial infrastructure
            <br />
            to grow your
            <br />
            revenue
          </h1>
          <p className="hs-subtitle">
            Join the millions of companies that use Stripe to accept payments
            online and in person, embed financial services, power custom revenue
            models, and build a more profitable business.
          </p>
          <button className="hs-cta">Request an invite</button>
        </div>
        <div className="hs-right">
          <div className="hs-dashboard">
            <header className="hs-dashboard__top">
              <span className="hs-dashboard__brand">ROCKET RIDES</span>
              <div className="hs-dashboard__search" />
            </header>

            <div className="hs-dashboard__body">
              <header className="hs-dashboard__header-row">
                <div>
                  <div className="hs-dashboard__label">
                    Net volume from sales
                  </div>
                  <div className="hs-dashboard__value">₹35,28,198.72</div>
                  <div className="hs-dashboard__help-text">Today · 14:00</div>
                </div>
                <div className="hs-dashboard__mini">
                  <span className="hs-dashboard__label">Yesterday</span>
                  <span className="hs-dashboard__mini-value">
                    ₹29,31,556.34
                  </span>
                </div>
              </header>

              <div className="hs-dashboard__charts">
                <div className="hs-chart hs-chart--large" />

                <div className="hs-chart-grid">
                  <div className="hs-chart-card">
                    <div className="hs-dashboard__label">
                      Net volume from sales
                    </div>
                    <div className="hs-dashboard__small-row">
                      <span className="hs-dashboard__value--small">
                        ₹29,274.29
                      </span>
                      <span className="hs-dashboard__badge hs-dashboard__badge--green">
                        +32.8%
                      </span>
                    </div>
                    <div className="hs-chart hs-chart--small" />
                  </div>

                  <div className="hs-chart-card">
                    <div className="hs-dashboard__label">New customers</div>
                    <div className="hs-dashboard__small-row">
                      <span className="hs-dashboard__value--small">37</span>
                      <span className="hs-dashboard__badge hs-dashboard__badge--green">
                        +32.1%
                      </span>
                    </div>
                    <div className="hs-chart hs-chart--small hs-chart--purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-phone">
            <div className="hs-phone__top">
              <div className="hs-phone__icon" />
              <div className="hs-phone__meta">
                <div className="hs-phone__product">Abstraction Magazine</div>
                <div className="hs-phone__price">₹19 per month</div>
              </div>
            </div>

            <button className="hs-phone__primary-btn">Pay</button>
            <button className="hs-phone__link-btn">Or pay with card</button>

            <div className="hs-phone__field-group">
              <label>
                Email
                <input type="email" placeholder="email@example.com" />
              </label>

              <label>
                Card information
                <div className="hs-phone__card-row">
                  <input type="text" placeholder="1234 1234 1234 1234" />
                  <input type="text" placeholder="MM / YY" />
                  <input type="text" placeholder="CVC" />
                </div>
              </label>

              <label>
                Country or region
                <div className="hs-phone__card-row hs-phone__card-row--2">
                  <input type="text" placeholder="India" />
                  <input type="text" placeholder="Postcode" />
                </div>
              </label>
            </div>

            <button className="hs-phone__bottom-btn">Pay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStripe;
