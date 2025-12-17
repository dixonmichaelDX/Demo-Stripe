import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">Stripe</div>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#developers">Developers</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </div>
      <div className="navbar-right">
        <a className="nav-links">support</a>
        <a className="btn btn-outline">Sign in</a>
         <a href="#contact" className="btn btn-primary">Contact sales</a>
      </div>
    </header>
  );
};

export default Navbar;
