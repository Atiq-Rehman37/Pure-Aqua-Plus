import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaQuestionCircle, FaTint, FaTruck, FaRecycle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./facts.css";

const Facts = () => {
  const faq = [
    {
      id: "faq1",
      icon: <FaTint className="text-info me-3" size={20} />,
      question: "What makes Pure Aqua Plus water different?",
      answer:
        "Pure Aqua Plus provides premium quality water bottles processed through a 5-step filtration system, ensuring safe and healthy hydration free from contamination.",
    },
    {
      id: "faq2",
      icon: <FaTruck className="text-info me-3" size={20} />,
      question: "Do you provide home delivery?",
      answer:
        "Yes, we deliver water bottles to your doorstep in Rawalpindi and Islamabad with fast and reliable service.",
    },
    {
      id: "faq3",
      icon: <FaRecycle className="text-info me-3" size={20} />,
      question: "Are the bottles reusable?",
      answer:
        "Yes, our 19L bottles are returnable and reusable. We ensure they are sanitized properly before each refill.",
    },
    {
      id: "faq4",
      icon: <FaQuestionCircle className="text-info me-3" size={20} />,
      question: "How can I place an order?",
      answer:
        "You can easily place your order via WhatsApp by clicking the ‘Order on WhatsApp’ button in our pricing section.",
    },
  ];

  return (
    <section className="faq-section py-5 bg-light">
      <div className="container">
        {/* Animated heading */}
        <motion.p
          className="text-info fw-bold fs-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          | <span>FAQs</span> |
        </motion.p>

        <motion.h2
          className="fw-bold text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion with animation */}
        <Accordion defaultActiveKey="0" alwaysOpen>
          {faq.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion.Item
                eventKey={String(index)}
                className="mb-3 shadow-sm rounded"
              >
                <Accordion.Header>
                  <div className="d-flex align-items-center fw-bold">
                    {item.icon} {item.question}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-muted">{item.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Facts;
