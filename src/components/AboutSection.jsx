import React from "react";
import { Link } from "react-router-dom";
import { FaTint, FaTruck, FaRecycle, FaShieldAlt } from "react-icons/fa";
import "./about.css";

const AboutSection = () => {
  const Team = [
    {
      img: "/images/CEO.jpg",
      name: "Saad Jamil",
      title: "CEO",
    },
    {
      img: "/images/Director.jpg",
      name: "Raja Shahid Mahmood",
      title: "Director",
    },
    {
      img: "/images/Manager.jpg",
      name: "Hanan Shams",
      title: "Quality Manager",
    },
  ];

  return (
    <section className="text-center py-5 bg-color2 position-relative overflow-hidden">
      {/* Top-left rotating shape */}
      <div className="position-absolute top-0 start-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>

      {/* ========= ABOUT COMPANY ========= */}
      <div className="container py-1">
        <p className="text-info fw-bold fs-4">| About Us |</p>
        <h3 className="fw-bold mb-2">
          Your Trusted Partner in Clean & Refreshing Water
        </h3>
      </div>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={"/images/aboutimage.jpg"}
              alt="About Aqua Pure Plus"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "420px" }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-lg-start text-center">
            <h2 className="fw-bold mb-4">
              We Always Strive for Pure, Safe & Healthy Water
            </h2>
            <p className="text-muted mb-3">
              Welcome to{" "}
              <span className="fw-bold text-info">Pure Aqua Plus</span>, where
              purity meets innovation. Our mission is to deliver premium-quality
              drinking water that not only refreshes but also nourishes your
              body with essential minerals.
            </p>
            <p className="text-muted mb-4">
              With Pure Aqua Plus, you don’t just quench your thirst—you invest
              in a healthier future for your family.
            </p>

            <Link
              to="/shop"
              className="btn btn-info px-4 py-2 text-white fw-bold rounded-pill shadow"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* ========= MISSION & VISION ========= */}
      <div className="mission-vision-section py-4">
        <div className="container">
          <p className="text-info fw-bold fs-4">| Mission & Vision |</p>
          <h2 className="fw-bold mb-5 text-white">Our Commitment</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="shadow-sm rounded p-4 h-100 bg-white bg-opacity-75">
                <h4 className="fw-bold text-info mb-3">Our Mission</h4>
                <p className="text-muted">
                  To provide safe, pure, and refreshing water that enhances the
                  well-being of every household. We are committed to quality,
                  health, and eco-friendly practices in every bottle we deliver.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="shadow-sm rounded p-4 h-100 bg-white bg-opacity-75">
                <h4 className="fw-bold text-info mb-3">Our Vision</h4>
                <p className="text-muted">
                  To be the most trusted water brand in Pakistan, setting new
                  standards in purity, sustainability, and customer satisfaction
                  while protecting our environment for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= WHY CHOOSE US ========= */}
      <div className="container py-5">
        <p className="text-info fw-bold fs-4">| Why Choose Us |</p>
        <h2 className="fw-bold mb-5">What Makes Us Different</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="shadow-sm rounded p-4 bg-white h-100">
              <FaTint size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Purity Guaranteed</h5>
              <p className="text-muted">
                5-step filtration for crystal-clear, safe drinking water.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="shadow-sm rounded p-4 bg-white h-100">
              <FaTruck size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Fast Delivery</h5>
              <p className="text-muted">
                Quick doorstep delivery in Rawalpindi & Islamabad.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="shadow-sm rounded p-4 bg-white h-100">
              <FaRecycle size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Eco-Friendly</h5>
              <p className="text-muted">
                Reusable bottles, sanitized & safe for sustainable use.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="shadow-sm rounded p-4 bg-white h-100">
              <FaShieldAlt size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Trusted Quality</h5>
              <p className="text-muted">
                Certified water quality you can rely on for your family.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= TEAM ========= */}
      <div className="container py-4">
        <p className="text-info fw-bold fs-4">| Our Team |</p>
        <h2 className="fw-bold mb-5">Meet the People Behind Aqua Pure Plus</h2>
        <div className="row">
          {Team.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="shadow-sm rounded bg-white h-100 d-flex flex-column justify-content-between align-items-center p-2"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <img
                  src={feature.img}
                  alt={feature.name}
                  className="mb-3 rounded"
                  style={{ maxHeight: "320px", width: "90%" }}
                />
                <div className="p-3">
                  <h4 className="fw-bold">{feature.name}</h4>
                  <h5 className="text-info my-3">{feature.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom-right rotating shape */}
      <div className="position-absolute bottom-0 end-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>
    </section>
  );
};

export default AboutSection;
