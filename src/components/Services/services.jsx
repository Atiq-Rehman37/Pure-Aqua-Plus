import React from "react";
import "./services.css";
import { FaBone, FaHeartbeat, FaBolt, FaTint } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaTint size={50} className="text-info mb-4" />,
      title: "Sodium",
      desc: "Supports hydration and helps your body stay energized throughout the day.",
    },
    {
      icon: <FaBone size={50} className="text-info mb-4" />,
      title: "Calcium",
      desc: "Keeps bones strong and contributes to healthy teeth and muscle activity.",
    },
    {
      icon: <FaHeartbeat size={50} className="text-info mb-4" />,
      title: "Potassium",
      desc: "Balances fluids in your body and promotes a healthy heart rhythm.",
    },
    {
      icon: <FaBolt size={50} className="text-info mb-4" />,
      title: "Magnesium",
      desc: "Boosts energy, relaxes muscles, and supports your body’s natural functions.",
    },
  ];

  return (
    <section className="service-section text-center text-white py-4 position-relative bg-color1">
      <div className="container py-5">
        <p className="text-info fw-bold fs-4">
          | <span>Our Services</span> |
        </p>
        <h2 className="fw-bold mb-5">
          Power-Packed Minerals for Your Health & Wellness
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="service-card bg-light p-4 rounded shadow-lg h-100 py-5">
                {service.icon}
                <h5 className="fw-bold text-dark mt-3">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
