import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="logo footer-logo" style={{marginTop:"20px"}}>Stripe</div>
          <p>India (English)</p>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
           <h4>Products &amp; pricing</h4>
            <a>Pricing</a>
            <a>Atlas</a>
            <a>Authorization Boost</a>
            <a>Billing</a>
            <a>Capital</a>
            <a>Checkout</a>
            <a>Climate</a>
            <a>Connect</a>
            <a>Data Pipeline</a>
            <a>Elements</a>
            <a>Financial Accounts</a>
            <a>Financial Connections</a>
            <a>Identity</a>
            <a>Invoicing</a>
            <a>Issuing</a>
            <a>Link</a>
            <a>Payments</a>
            <a>Payment Links</a>
            <a>Payouts</a>
            <a>Radar</a>
            <a>Revenue Recognition</a>
            <a>Stripe Sigma</a>
            <a>Tax</a>
            <a>Terminal</a>
          </div>
          <div className="footer-col">
           <h4>Solutions</h4>
            <a>Enterprises</a>
            <a>Startups</a>
            <a>Agency &amp; commerce</a>
            <a>Crypto</a>
            <a>E‑commerce</a>
            <a>Embedded finance</a>
            <a>Finance automation</a>
            <a>Global businesses</a>
            <a>In‑app payments</a>
            <a>Marketplaces</a>
            <a>Platforms</a>
            <a>SaaS</a>
            <a>AI companies</a>
            <a>Creator economy</a>
            <a>Hospitality, travel &amp; leisure</a>
            <a>Local businesses</a>
            <a>Media &amp; entertainment</a>
            <a>Non‑profits</a>
            <a>Retail</a>

            <h4>Integrations &amp; custom solutions</h4>
            <a>Stripe App Marketplace</a>
            <a>Partner ecosystem</a>
            <a>Professional services</a>
          </div>
          <div className="footer-col">
             <h4>Resources</h4>
            <a>Guides</a>
            <a>Customer stories</a>
            <a>Blog</a>
            <a>Sessions annual conference</a>
            <a>Privacy &amp; terms</a>
            <a>Prohibited &amp; restricted businesses</a>
            <a>Licences</a>
            <a>Sitemap</a>
            <a>Cookie settings</a>
            <a>More resources</a>

            <h4>Company</h4>
            <a>Jobs</a>
            <a>Newsroom</a>
            <a>Stripe Press</a>
            <a>Contact sales</a>

             <h4>Support</h4>
            <a>Get support</a>
            <a>Managed support plans</a>

            <h4>Developers</h4>
            <a>Documentation</a>
            <a>API reference</a>
            <a>API status</a>
            <a>API changelog</a>
            <a>Libraries and SDKs</a>
            <a>Developer blog</a>

            <h4>Account</h4>
            <a>Sign in ›</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Stripe, Inc.</span>
        {/* <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
