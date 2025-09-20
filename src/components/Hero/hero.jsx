import React from "react";
import { FaTint } from "react-icons/fa";
import "./hero.css";

const hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-8">
            <h1 className="fw-bold display-4">
              To Pure <br /> For This <br /> Trust World
            </h1>
            <p className="mt-3 fs-5">
              Discover the natural taste of life with <b>PURE AQUA PLUS</b>{" "}
              Mineral Water — carefully filtered and packed to keep you
              hydrated, healthy, and refreshed every day.
            </p>
            <div className="mt-5">
              <button className="btn-custom btn-shop me-3">
                <FaTint className="me-2" />
                Shop Now
              </button>
              <button className="btn-custom btn-about">About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
