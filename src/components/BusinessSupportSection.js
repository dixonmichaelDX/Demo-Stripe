import React from "react";
import "./BusinessSupportSection.css";

const BusinessSupportSection = () => {
  return (
    <section className="support-section">
      <div className="support-inner">
        <header className="support-header">
          <h2>Support for any business type</h2>
          <p>
            From global AI companies to category-defining marketplaces,
            successful businesses across industries grow and scale with Stripe.
          </p>
        </header>
        <div className="support-cards">
          <article className="support-card">
            <div className="support-card-body">
              <h3>AI</h3>
              <p>
                Stripe supports businesses across the AI ecosystem &mdash; from
                usage-based billing for AI assistants to premium subscriptions
                for infrastructure providers.
              </p>
              <button className="support-link">
                Learn more <span>↗</span>
              </button>
            </div>
            <div className="support-card-footer">
              <span>OpenAI</span>
              <span>Cursor</span>
              <span>Anthropic</span>
            </div>
          </article>

          <article className="support-card">
            <div className="support-card-body">
              <h3>SaaS</h3>
              <p>
                Quickly launch and grow recurring revenue with a unified
                platform for payments, subscriptions, invoicing, and more.
              </p>
              <button className="support-link">
                Learn more <span>↗</span>
              </button>
            </div>
            <div className="support-card-footer">
              <span>Slack</span>
              <span>Twilio</span>
              <span>Linear</span>
            </div>
          </article>

          <article className="support-card">
            <div className="support-card-body">
              <h3>Marketplace</h3>
              <p>
                Get everything you need to onboard providers, manage multi-party
                payments, and automate payouts in one place.
              </p>
              <button className="support-link">
                Learn more <span>↗</span>
              </button>
            </div>
            <div className="support-card-footer">
              <span>Bloomnation</span>
              <span>Instacart</span>
              <span>Lyft</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupportSection;
