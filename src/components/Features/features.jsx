import React from "react";
import {
  FaTint,
  FaHandsHelping,
  FaRecycle,
  FaGlassWhiskey,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Features.css";

const features = () => {
  const features = [
    {
      icon: <FaTint size={50} className="text-info mb-4" />,
      title: "Maximum Purity",
      desc: "Crystal-clear hydration, pure essence of nature.",
    },
    {
      icon: <FaHandsHelping size={50} className="text-info mb-4" />,
      title: "FDA Approved",
      desc: "Balanced ration of FDA approved minerals.",
    },
    {
      icon: <FaRecycle size={50} className="text-info mb-4" />,
      title: "5 Steps Filtration",
      desc: "State of the art fully automated plant.",
    },
    {
      icon: <FaGlassWhiskey size={50} className="text-info mb-3" />,
      title: "Healthy Water",
      desc: "Pure Aqua Plus is safe and healthy, free from chemical contamination.",
    },
  ];

  return (
    <section className="features-section text-center py-5 bg-color2 position-relative overflow-hidden">
      {/* Top-left rotating shape */}
      <div className="position-absolute top-0 start-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>

      <div className="container py-5">
        <p className="text-info fw-bold fs-4">Trusted Quality Features</p>
        <h2 className="fw-bold mb-5">Our Commitment to Quality</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="feature-card p-4 shadow-sm rounded bg-white h-100 py-5">
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
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

export default features;
