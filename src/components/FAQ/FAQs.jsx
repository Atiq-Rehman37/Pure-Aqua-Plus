import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaQuestionCircle, FaTint, FaTruck, FaRecycle } from "react-icons/fa";
import "react-accessible-accordion/dist/fancy-example.css";
import "./faq.css";

const faqs = () => {
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
        <p className="text-info fw-bold fs-4 text-center">
          | <span>FAQs</span> |
        </p>
        <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>

        {/* ✅ First item open by default */}
        <Accordion allowZeroExpanded preExpanded={["faq1"]}>
          {faq.map((faq) => (
            <AccordionItem
              uuid={faq.id}
              key={faq.id}
              className="mb-3 shadow-sm rounded"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-button-custom d-flex align-items-center fw-bold">
                  {faq.icon} {faq.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-muted">{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default faqs;
