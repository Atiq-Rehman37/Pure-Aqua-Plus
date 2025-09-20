import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header/header";
import Home from "../components/Hero/hero";
import Features from "../components/Features/features";
const home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Home />
      <Features />
    </div>
  );
};

export default home;
