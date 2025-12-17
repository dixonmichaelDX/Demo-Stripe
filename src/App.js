import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/LowCodeSection";
import Footer from "./components/Footer";
import GlobalScale from "./components/GlobalScale";
import EnterpriseSection from "./components/EnterpriseSection";
import StartupSection from "./components/StartupSection";
import DeveloperSection from "./components/DeveloperSection";
import LowCodeSection from "./components/LowCodeSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Logos /><br/>
        <GlobalScale/><br/>
        <EnterpriseSection/><br/>
        <StartupSection/><br/>
        <DeveloperSection/><br/>
        <LowCodeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
