import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ScreenshotSection from "../components/ScreenshotSection";
import EmailCapture from "../components/EmailCapture";
import Footer from "../components/Footer";
import FeatureSet from "../components/FeatureSet";
import StatsScroller from "../components/Stats";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <StatsScroller />
      <ScreenshotSection />
      <FeatureSet />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Home;
