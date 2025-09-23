import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/footer";
import CallToAction from "./components/CallToAction";
import { FaWhatsapp } from "react-icons/fa";

//Lazy load pages
const Home = lazy(() => import("./pages/home"));
const Shop = lazy(() => import("./pages/shope"));
const AboutUs = lazy(() => import("./pages/aboutus"));
const Contact = lazy(() => import("./pages/contact"));

const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Header />
        <ScrollToTop />

        {/* Suspense fallback shows while page is loading */}
        <Suspense
          fallback={
            <div className="text-center py-5 bg-color2">
              <h4 className="text-info">Loading...</h4>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        {/* WhatsApp Floating Button */}
        {/* Modern WhatsApp Floating Button */}
        <a
          href="https://wa.me/9203355581089"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
