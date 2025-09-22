import React from "react";
import { FaTint } from "react-icons/fa";
import "./hero.css";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-8 col-12">
            <h1 className="fw-bold display-4">
              Too Pure <br /> For This <br /> Thirsty World
            </h1>
            <p className="mt-3 fs-5">
              Discover the natural taste of life with <b>PURE AQUA PLUS</b>{" "}
              Mineral Water — carefully filtered and packed to keep you
              hydrated, healthy, and refreshed every day.
            </p>
            <div className="mt-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
