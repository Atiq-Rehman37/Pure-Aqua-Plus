import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header/header";
import Home from "./pages/home";
import Shop from "./pages/shope";
import Footer from "./components/Footer/footer";
import CallToAction from "./components/CallToAction";
const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
