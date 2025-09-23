import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // NavLink active class styling
  const activeClass = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <header className="header position-sticky top-0">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo + Text */}
        <Link to="/" className="logo-section text-decoration-none">
          <img src="/images/logo.jpg" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <h4 className="brand-name">
              Pure <br /> <span>Aqua</span> Plus
            </h4>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="menu d-none d-md-flex">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={activeClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <div className="d-md-none">
          <FaBars
            size={24}
            onClick={toggleMenu}
            className="menu-icon text-color2"
          />
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          <FaTimes size={24} className="close-icon" onClick={toggleMenu} />
          <NavLink to="/shop" className={activeClass} onClick={toggleMenu}>
            <span>
              <img
                src={"/images/logo.jpg"}
                height="30px"
                alt="Logo"
                className="me-2 rounded"
              />
            </span>{" "}
            Pure <span className="text-color1">Aqua</span> Plus
          </NavLink>
          <NavLink to="/" className={activeClass} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/shop" className={activeClass} onClick={toggleMenu}>
            Shop
          </NavLink>
          <NavLink to="/about" className={activeClass} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={activeClass} onClick={toggleMenu}>
            Contact Us
          </NavLink>
        </div>

        {/* Bottom Info */}
        <div className="info">
          <h4 className="mb-3">Our Address</h4>
          <p className="mb-3">
            Street 5, Madni Mohallah, Chak Jalal Din, Girja Road, Rawalpindi
          </p>
          <p>
            <a href="tel:+923355581089" className="phone-link">
              +92 335 5581089
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
