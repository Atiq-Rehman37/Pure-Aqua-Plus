import React from "react";
import { FaTint } from "react-icons/fa";
import "./hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-8 col-12">
            {/* Heading Animation */}
            <motion.h1
              className="fw-bold display-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Too Pure <br /> For This <br /> Thirsty World
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p
              className="mt-3 fs-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Discover the natural taste of life with <b>PURE AQUA PLUS</b>{" "}
              Mineral Water — carefully filtered and packed to keep you
              hydrated, healthy, and refreshed every day.
            </motion.p>

            {/* Buttons Animation */}
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/shop"
                className="btn-custom btn-shop me-3 text-decoration-none"
              >
                <FaTint className="me-2" />
                Shop Now
              </Link>
              <Link
                to="/about"
                className="btn-custom btn-about text-decoration-none"
              >
                About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
