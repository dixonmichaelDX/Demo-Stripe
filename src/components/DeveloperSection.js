import React from "react";
import "./DeveloperSection.css";

const DeveloperSection = () => {
  return (
    <section className="dev-band">
      {/* angled background layers */}
      <div className="dev-band__skew dev-band__skew--top" />
      <div className="dev-band__skew dev-band__skew--bottom" />

      <div className="dev-band__inner">
        {/* left content */}
        <div className="dev-band__left">
          <p className="dev-eyebrow">Designed for developers</p>
          <h2 className="dev-title">
            Ship faster with powerful
            <br />
            and easy‑to‑use APIs
          </h2>
          <p className="dev-text">
            Save engineering time with unified payments functionality. We obsess
            over the maze of gateways, payments rails, and financial
            institutions that make up the global economic landscape so that your
            teams can build what you need on one platform.
          </p>
          <button className="dev-cta">Read the docs ›</button>
        </div>

        {/* right code card */}
        <div className="dev-band__right">
          <article className="code-card">
            <header className="code-card__top">
              <div className="code-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="code-file">server.js</span>
            </header>

            <pre className="code-block">
{`const stripe = require('stripe')('<sk_test_...>');

await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd'
});`}
            </pre>

            <div className="code-terminal">
              <div className="code-terminal__tab">NORMAL</div>
              <div className="code-terminal__body">
                <p>$ node server.js &amp;&amp; stripe listen</p>
                <p className="code-line">▶ Ready! Waiting for requests…</p>
                <p className="code-line code-line--success">
                  [200] payment_intent.created
                </p>
                <p className="code-line code-line--success">
                  [200] charge.succeeded
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* bottom feature row */}
      <div className="dev-band__features">
        <div className="dev-feature">
          <div className="dev-feature__icon">⚙️</div>
          <h3>Use Stripe with your stack</h3>
          <p>
            Client and server libraries in React, Node, .NET, iOS, and more.
          </p>
          <button>See libraries ›</button>
        </div>
        <div className="dev-feature">
          <div className="dev-feature__icon">🤖</div>
          <h3>Build AI agents</h3>
          <p>
            Create agents that manage money and handle support using the Stripe
            API.
          </p>
          <button>View docs ›</button>
        </div>
        <div className="dev-feature">
          <div className="dev-feature__icon">🔌</div>
          <h3>Explore pre‑built integrations</h3>
          <p>
            Connect to tools including Salesforce, Xero, and Adobe Commerce.
          </p>
          <button>Browse apps ›</button>
        </div>
        <div className="dev-feature">
          <div className="dev-feature__icon">📦</div>
          <h3>Build on Stripe Apps</h3>
          <p>
            Create an app for your team or for millions of businesses on Stripe.
          </p>
          <button>Learn about Apps ›</button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
