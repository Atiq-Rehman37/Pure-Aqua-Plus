import React from "react";
import {
  FaTint,
  FaHandsHelping,
  FaRecycle,
  FaGlassWhiskey,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./features.css";
import { motion } from "framer-motion";

const Features = () => {
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
    <motion.section
      className="features-section text-center py-5 bg-color2 position-relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Top-left rotating shape */}
      <div className="position-absolute top-0 start-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>

      <div className="container py-5">
        <motion.p
          className="text-info fw-bold fs-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          | Trusted Quality Features |
        </motion.p>
        <motion.h2
          className="fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Commitment to Quality
        </motion.h2>

        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              className="col-md-3 mb-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-card p-4 shadow-sm rounded bg-white h-100 py-5">
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom-right rotating shape */}
      <div className="position-absolute bottom-0 end-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>
    </motion.section>
  );
};

export default Features;
