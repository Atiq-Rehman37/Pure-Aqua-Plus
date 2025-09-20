import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header position-sticky top-0">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo + Text */}
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <h4 className="brand-name">
              Pure <br /> <span>Aqua</span> Plus
            </h4>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="menu d-none d-md-flex">
          <a href="#shop">Shop</a>
          <a href="#blog">Blog</a>
          <a href="#about">About Us</a>
          <a href="#career">Career</a>
          <a href="#contact">Contact Us</a>
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
          <a href="#shop" onClick={toggleMenu}>
            Shop
          </a>
          <a href="#blog" onClick={toggleMenu}>
            Blog
          </a>
          <a href="#about" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#career" onClick={toggleMenu}>
            Career
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact Us
          </a>
        </div>

        {/* Bottom Info */}
        <div className="info">
          <h4>Our Address</h4>
          <p>Baraf Khana Chowk, Rawalpindi</p>
          <p>
            <a href="tel:+923001234567" className="phone-link">
              +92 300 1234567
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
