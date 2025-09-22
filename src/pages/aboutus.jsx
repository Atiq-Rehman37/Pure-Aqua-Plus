import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";

const aboutus = () => {
  useEffect(() => {
    document.title = "About Us - Pure Aqua Plus";
  }, []);
  return (
    <div>
      <AboutSection />
    </div>
  );
};

export default aboutus;
