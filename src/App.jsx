import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/footer";
import CallToAction from "./components/CallToAction";

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

        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
