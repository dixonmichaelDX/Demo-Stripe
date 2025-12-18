import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">Stripe</div>

        <nav className="nav-links">
          <div className="nav-item nav-item--has-menu">
            <button className="nav-trigger" type="button">
              Products <span className="nav-trigger__arrow">▾</span>
            </button>

            <div className="nav-megamenu">
              <div className="nav-mega-left">
                <div className="nav-mega-section">
                  <h4 className="nav-mega-heading">Global payments</h4>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Payments</div>
                      <div className="nav-mega-sub">Online payments</div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Terminal</div>
                      <div className="nav-mega-sub">In‑person payments</div>
                    </div>
                  </div>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Payment Links</div>
                      <div className="nav-mega-sub">No‑code payments</div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Radar</div>
                      <div className="nav-mega-sub">Fraud prevention</div>
                    </div>
                  </div>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Checkout</div>
                      <div className="nav-mega-sub">Pre‑built payment form</div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Authorization Boost</div>
                      <div className="nav-mega-sub">
                        Acceptance optimisations
                      </div>
                    </div>
                  </div>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Elements</div>
                      <div className="nav-mega-sub">Flexible UI components</div>
                    </div>
                  </div>
                </div>
                <div className="nav-mega-section">
                  <h4 className="nav-mega-heading">Money management</h4>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Connect</div>
                      <div className="nav-mega-sub">Payments for platforms</div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Global Payouts</div>
                      <div className="nav-mega-sub">
                        Send money to third parties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-mega-section">
                  <h4 className="nav-mega-heading">
                    Revenue and finance automation
                  </h4>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Billing</div>
                      <div className="nav-mega-sub">
                        Subscription management
                      </div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Revenue Recognition</div>
                      <div className="nav-mega-sub">Accounting automation</div>
                    </div>
                  </div>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Usage‑based</div>
                      <div className="nav-mega-sub">Metered billing</div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Stripe Sigma</div>
                      <div className="nav-mega-sub">Custom reports</div>
                    </div>
                  </div>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Invoicing</div>
                      <div className="nav-mega-sub">One‑time or recurring</div>
                    </div>
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Data Pipeline</div>
                      <div className="nav-mega-sub">Data sync</div>
                    </div>
                  </div>

                  <div className="nav-mega-row">
                    <div className="nav-mega-item">
                      <div className="nav-mega-title">Tax</div>
                      <div className="nav-mega-sub">
                        Sales tax &amp; VAT automation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-mega-section nav-mega-section--more">
                <h4 className="nav-mega-heading">More</h4>
                <button className="nav-mega-link">Payment methods</button>
                <button className="nav-mega-link">Link</button>
                <button className="nav-mega-link">Financial Connections</button>
                <button className="nav-mega-link">Identity</button>
                <button className="nav-mega-link">Atlas</button>
                <button className="nav-mega-link">Climate</button>
              </div>
            </div>
          </div>
          <div className="nav-item nav-item--has-menu">
            <button className="nav-trigger" type="button">
              Solutions <span className="nav-trigger__arrow">▾</span>
            </button>

            <div className="nav-megamenu--solutions">
              <div className="nav-sol-section">
                <h4 className="nav-mega-heading">By stage</h4>
                <div className="nav-sol-row">
                  <button className="nav-sol-item">Enterprises</button>
                  <button className="nav-sol-item">Startups</button>
                </div>
              </div>
              <div className="nav-sol-section">
                <h4 className="nav-mega-heading">By use case</h4>
                <div className="nav-sol-columns">
                  <div className="nav-sol-col">
                    <button className="nav-sol-link">Agentic commerce</button>
                    <button className="nav-sol-link">Crypto</button>
                    <button className="nav-sol-link">E‑commerce</button>
                    <button className="nav-sol-link">Embedded finance</button>
                    <button className="nav-sol-link">Finance automation</button>
                  </div>
                  <div className="nav-sol-col">
                    <button className="nav-sol-link">Global businesses</button>
                    <button className="nav-sol-link">In‑app payments</button>
                    <button className="nav-sol-link">Marketplaces</button>
                    <button className="nav-sol-link">Platforms</button>
                    <button className="nav-sol-link">SaaS</button>
                  </div>
                </div>
              </div>
              <div className="nav-sol-section">
                <h4 className="nav-mega-heading">By industry</h4>
                <div className="nav-sol-columns">
                  <div className="nav-sol-col">
                    <button className="nav-sol-link">AI companies</button>
                    <button className="nav-sol-link">Creator economy</button>
                    <button className="nav-sol-link">
                      Hospitality, travel and leisure
                    </button>
                    <button className="nav-sol-link">Insurance</button>
                  </div>
                  <div className="nav-sol-col">
                    <button className="nav-sol-link">
                      Media and entertainment
                    </button>
                    <button className="nav-sol-link">Non‑profits</button>
                    <button className="nav-sol-link">Retail</button>
                  </div>
                </div>
              </div>
              <div className="nav-sol-section">
                <h4 className="nav-mega-heading">Ecosystem</h4>
                <div className="nav-sol-row">
                  <button className="nav-sol-item">
                    Stripe App Marketplace
                  </button>
                  <button className="nav-sol-item">Partners</button>
                </div>
              </div>
            </div>
          </div>
          <a href="#developers">Developers</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </div>

      <div className="navbar-right">
        <a className="nav-links">support</a>
        <a className="btn btn-outline" style={{ color: "black" }}>
          Sign in
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact sales
        </a>
      </div>
    </header>
  );
};

export default Navbar;
