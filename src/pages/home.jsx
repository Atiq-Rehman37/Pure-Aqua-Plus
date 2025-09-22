import React, { useEffect } from "react";
import Hero from "../components/Hero/hero";
import Features from "../components/Features/features";
import Services from "../components/Services/services";
import Pricing from "../components/Pricing/pricing";
import Facts from "../components/Faqs/facts";
const home = () => {
  useEffect(() => {
    document.title = "Pure Aqua Plus - Drinking Water Delivery Rawalpindi";
  }, []);
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Facts />
    </div>
  );
};

export default home;
