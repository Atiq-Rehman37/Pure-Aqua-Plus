import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="bg-color1 text-white  py-5 border-top  border-3 border-info">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Text */}
          <div className="col-md-9 mb-3 mb-md-0">
            <h4 className="fw-bold">
              Please <span className="highlight">Call Us</span> to Take an
              Extraordinary Service
            </h4>
          </div>

          {/* Button */}
          <div className="col-md-3 text-md-start">
            <a
              href="tel:03355581089"
              className="btn btn-info text-white px-3 d-inline-flex align-items-center"
            >
              <FaPhoneAlt className="me-2" />
              0335 5581089
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
