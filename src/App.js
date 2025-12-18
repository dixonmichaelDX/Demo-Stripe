import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
import GlobalScale from "./components/GlobalScale";
import EnterpriseSection from "./components/EnterpriseSection";
import StartupSection from "./components/StartupSection";
import DeveloperSection from "./components/DeveloperSection";
import LowCodeSection from "./components/LowCodeSection";
import HeroStripe from "./components/HeroStripe";
import BusinessSupportSection from "./components/BusinessSupportSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroStripe />
        <br />
        <Logos />
        <br />
        <GlobalScale />
        <br />
        <BusinessSupportSection />
        <br />
        <EnterpriseSection />
        <br />
        <StartupSection />
        <br />
        <DeveloperSection />
        <br />
        <LowCodeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
