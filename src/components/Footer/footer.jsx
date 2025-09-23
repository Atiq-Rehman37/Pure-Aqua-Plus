import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6"; // <-- TikTok icon
import "./footer.css";
import { Link } from "react-router-dom";

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
              <FaMapMarkerAlt className="text-info me-2" />
              Street 5, Madni Mohallah, Chak Jalal Din, Girja Road, Rawalpindi
            </p>
            <p>
              <FaPhoneAlt className="text-info me-2" /> Call Us: 0335 5581089
            </p>

            <div>
              <p>Social Platforms:</p>
              <a
                href="https://www.facebook.com/share/1B5fzBX3tq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-5"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/pure_aqua_plus?igsh=MTB6emFiaTVqNDg1ag=="
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
                className="text-light me-3 fs-5"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.tiktok.com/@pure_aqua_plus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/shop"} className="text-light text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-light text-decoration-none"
                >
                  Contact Us
                </Link>
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
              Reserved | <span>Developed by ATIQ REHMAN</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
