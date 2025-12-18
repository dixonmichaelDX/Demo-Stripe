import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div
            className="logo footer-logo"
            style={{ marginTop: "10px", color: "white" }}
          >
            Stripe
          </div>
          <p>India (English)</p>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Products &amp; pricing</h4>
            <a href="#">Pricing</a>
            <a href="#">Atlas</a>
            <a href="#">Authorization Boost</a>
            <a href="#">Billing</a>
            <a href="#">Capital</a>
            <a href="#">Checkout</a>
            <a href="#">Climate</a>
            <a href="#">Connect</a>
            <a href="#">Data Pipeline</a>
            <a href="#">Elements</a>
            <a href="#">Financial Accounts</a>
            <a href="#">Financial Connections</a>
            <a href="#">Identity</a>
            <a href="#">Invoicing</a>
            <a href="#">Issuing</a>
            <a href="#">Link</a>
            <a href="#">Payments</a>
            <a href="#">Payment Links</a>
            <a href="#">Payouts</a>
            <a href="#">Radar</a>
            <a href="#">Revenue Recognition</a>
            <a href="#">Stripe Sigma</a>
            <a href="#">Tax</a>
            <a href="#">Terminal</a>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="#">Enterprises</a>
            <a href="#">Startups</a>
            <a href="#">Agency &amp; commerce</a>
            <a href="#">Crypto</a>
            <a href="#">E‑commerce</a>
            <a href="#">Embedded finance</a>
            <a href="#">Finance automation</a>
            <a href="#">Global businesses</a>
            <a href="#">In‑app payments</a>
            <a href="#">Marketplaces</a>
            <a href="#">Platforms</a>
            <a href="#">SaaS</a>
            <a href="#">AI companies</a>
            <a href="#">Creator economy</a>
            <a href="#">Hospitality, travel &amp; leisure</a>
            <a href="#">Local businesses</a>
            <a href="#">Media &amp; entertainment</a>
            <a href="#">Non‑profits</a>
            <a href="#">Retail</a>

            <h4>Integrations &amp; custom solutions</h4>
            <a href="#">Stripe App Marketplace</a>
            <a href="#">Partner ecosystem</a>
            <a href="#">Professional services</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#">Guides</a>
            <a href="#">Customer stories</a>
            <a href="#">Blog</a>
            <a href="#">Sessions annual conference</a>
            <a href="#">Privacy &amp; terms</a>
            <a href="#">Prohibited &amp; restricted businesses</a>
            <a href="#">Licences</a>
            <a href="#">Sitemap</a>
            <a href="#">Cookie settings</a>
            <a href="#">More resources</a>

            <h4>Company</h4>
            <a href="#">Jobs</a>
            <a href="#">Newsroom</a>
            <a href="#">Stripe Press</a>
            <a href="#">Contact sales</a>

            <h4>Support</h4>
            <a href="#">Get support</a>
            <a href="#">Managed support plans</a>

            <h4>Developers</h4>
            <a href="#">Documentation</a>
            <a href="#">API reference</a>
            <a href="#">API status</a>
            <a href="#">API changelog</a>
            <a href="#">Libraries and SDKs</a>
            <a href="#">Developer blog</a>

            <h4>Account</h4>
            <a href="#">Sign in ›</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Stripe, Inc.</span>
        {/* <div className="footer-bottom-links">
          <a href="#" href="#privacy">Privacy</a>
          <a href="#" href="#terms">Terms</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
