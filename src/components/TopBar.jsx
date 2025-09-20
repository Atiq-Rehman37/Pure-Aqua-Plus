import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-color2 text-dark py-3">
      <div className="container d-flex justify-content-between align-items-center text-nowrap">
        <div className="d-flex align-items-center">
          <MdLocalShipping className="me-2 text-color1" size={20} />
          <span className="fw-semibold">24/7 Delivery Service</span>
        </div>
        <div className="d-flex align-items-center">
          <FaPhoneAlt className="me-2 text-color1" size={16} />
          <a
            href="tel:+923001234567"
            className="text-dark text-decoration-none fw-semibold"
          >
            +92 3001234567
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
