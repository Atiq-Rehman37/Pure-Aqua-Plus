import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header/header";
import Home from "../components/Hero/hero";
import Features from "../components/Features/features";
import Services from "../components/Services/services";
const home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Home />
      <Features />
      <Services />
    </div>
  );
};

export default home;
