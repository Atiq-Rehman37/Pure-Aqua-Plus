import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css";
const footer = () => {
  return (
    <footer className="text-light pt-5">
      <div className="container">
        <div className="row">
          {/* Logo + Open Hours */}
          <div className="col-md-4 mb-4">
            <h5>
              <span>
                <img
                  src="/images/logo.jpg"
                  alt="Pure Aqua Plus"
                  className="img-fluid mb-3 rounded"
                  style={{ maxWidth: "40px", maxHeight: "60px" }}
                />
              </span>{" "}
              Pure <span>Aqua</span> Plus
            </h5>
            <h5 className="fw-bold mt-2">Open Hours:</h5>
            <p>Delivery Available 24/7</p>
          </div>

          {/* Address */}
          <div className="col-md-5 mb-4">
            <h5 className="fw-bold">Address</h5>
            <p>
              <FaMapMarkerAlt className="text-info me-2" /> Baraf Khana Chowk ,
              misrial road, Rawalpindi
            </p>
            <p>
              <FaPhoneAlt className="text-info me-2" /> Call Us: 0335 5581089
            </p>

            <div className="">
              <p>Socail Platforms : </p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-5"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-5"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/923355581089"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/shop" className="text-light text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-light" />

        {/* Footer bottom row */}
        <div className="row align-items-center text-center py-3">
          <div className="mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Pure Aqua Plus | All Rights
              Reserved |<span> Developed by Pure Aqua Plus Team !</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
