import React, { useState } from "react";
import "./EnterpriseSection.css";

const COMPANY_DATA = {
  amazon: {
    eyebrow: "Enterprise reinvention",
    title: "Bring agility to your enterprise",
    description:
      "Amazon uses modern payment experiences to support high-volume traffic, optimize authorization rates, and expand into new markets while maintaining reliability at global scale.",
    stats: [
      { value: "190+", label: "Countries served worldwide" },
      { value: "$10B+", label: "Goods handled every year through its network" },
      { value: "Products used", label: "Payments · Billing" },
    ],
    cardTitle:
      "See how Amazon builds reliable payments experiences for customers everywhere.",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  maersk: {
    eyebrow: "Enterprise reinvention",
    title: "Bring agility to your enterprise",
    description:
      "Maersk uses Stripe to tap into new technology, streamline complex logistics, and make it easier for businesses to ship around the world.",
    stats: [
      { value: "130", label: "Countries in logistics network" },
      { value: "$10B+", label: "Billion worth of goods moved each year" },
      { value: "Products used", label: "Payments · Connect" },
    ],
    cardTitle:
      "See how Maersk tapped into new technology to make it easier to ship around the world.",
    image:
      "https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  twilio: {
    eyebrow: "Enterprise reinvention",
    title: "Bring agility to your enterprise",
    description:
      "Twilio integrates Stripe to scale subscriptions, support usage-based pricing, and provide a seamless payments experience for developers and customers.",
    stats: [
      { value: "70K+", label: "Businesses building on Twilio" },
      { value: "99.99%", label: "Targeted uptime for communication APIs" },
      { value: "Products used", label: "Payments · Invoicing" },
    ],
    cardTitle:
      "See how Twilio pairs communications APIs with Stripe to power monetization at scale.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
};

const EnterpriseSection = () => {
  const [activeCompany, setActiveCompany] = useState("maersk");
  const data = COMPANY_DATA[activeCompany];

  return (
    <section className="enterprise">
      <div className="enterprise__inner">
        <div className="enterprise__left">
          <p className="enterprise__eyebrow">{data.eyebrow}</p>
          <h2 className="enterprise__title">{data.title}</h2>
          <p className="enterprise__description">{data.description}</p>

          <button className="enterprise__cta">
            Explore Stripe for enterprises <span className="cta-arrow">›</span>
          </button>

          <div className="enterprise__stats">
            {data.stats.map((stat) => (
              <div className="enterprise__stat" key={stat.value + stat.label}>
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="enterprise__right">
          <article className="enterprise-card">
            <header className="enterprise-card__header">
              <span className="enterprise-card__logo">
                {activeCompany.toUpperCase()}
              </span>
              <span className="enterprise-card__icon">⌂</span>
            </header>
            <div
              className="enterprise-card__image"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(12,74,110,0.88), rgba(12,74,110,0.15)), url(${data.image})`,
              }}
            />

            <div className="enterprise-card__content">
              <h3 className="enterprise-card__title">{data.cardTitle}</h3>
              <button className="enterprise-card__link">
                Read story <span>›</span>
              </button>
            </div>
          </article>

          <div className="enterprise-tabs">
            <button
              className={
                "enterprise-tab " +
                (activeCompany === "amazon"
                  ? "enterprise-tab--active"
                  : "enterprise-tab--inactive")
              }
              onClick={() => setActiveCompany("amazon")}
            >
              amazon
            </button>
            <button
              className={
                "enterprise-tab " +
                (activeCompany === "maersk"
                  ? "enterprise-tab--active"
                  : "enterprise-tab--inactive")
              }
              onClick={() => setActiveCompany("maersk")}
            >
              maersk
            </button>
            <button
              className={
                "enterprise-tab " +
                (activeCompany === "twilio"
                  ? "enterprise-tab--active"
                  : "enterprise-tab--inactive")
              }
              onClick={() => setActiveCompany("twilio")}
            >
              twilio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
