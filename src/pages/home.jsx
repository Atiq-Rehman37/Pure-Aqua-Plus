import React from "react";
import Hero from "../components/Hero/hero";
import Features from "../components/Features/features";
import Services from "../components/Services/services";
import Pricing from "../components/Pricing/pricing";
import Facts from "../components/Faqs/facts";
import CallToAction from "../components/CallToAction";
const home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Facts />
      <CallToAction />
    </div>
  );
};

export default home;
