import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header/header";
import Home from "../components/Hero/hero";

const home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Home />
    </div>
  );
};

export default home;
