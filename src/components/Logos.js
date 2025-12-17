import React from "react";
import "./Logos.css";

const Logos = () => {
  return (
    <section className="logos">
      <p className="logos-title">
        Trusted by ambitious companies of every size.
      </p>
      <div className="logos-grid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify" className="logo" />
         <img src="https://simpleicons.org/icons/github.svg" alt="GitHub" className="logo" />
        <img src="https://simpleicons.org/icons/discord.svg" alt="Discord" className="logo" />
      </div>
    </section>
  );
};

export default Logos;
