import React from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import "./pricing.css";

const Pricing = () => {
  const products = [
    {
      image: "/images/12liter.jpg",
      title: "12 Liter Bottle",
      price: " 280/- PKR",
    },
    {
      image: "/images/6litre.png",
      title: "6 Liter Bottle",
      price: "180/- PKR",
    },
    {
      image: "/images/19-litre.png",
      title: "19 Liter Bottle",
      price: " 200/- PKR",
    },
  ];

  const whatsappNumber = "+923355581089";

  return (
    <section className="features-section text-center py-5 bg-color2 position-relative overflow-hidden">
      {/* Top-left rotating shape */}
      <div className="position-absolute top-0 start-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>

      <div className="container py-5">
        <p className="text-info fw-bold fs-4">
          | <span>Pricing</span> |
        </p>
        <h2 className="fw-bold mb-5">We Deliver Best Quality Bottle Packs.</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className=" shadow-sm rounded bg-white h-100 d-flex flex-column justify-content-between align-items-center p-4"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid mb-3 rounded product-img"
                />
                <div className="p-3">
                  <h5 className="fw-bold">{product.title}</h5>
                  <h6 className="text-info my-3">Price: {product.price}</h6>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello! I want to order ${product.image} ${product.title} for ${product.price}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp fw-bold py-2 px-4 rounded-pill d-flex align-items-center justify-content-center gap-2"
                >
                  <FaWhatsapp size={18} /> Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-whatsapp mt-3 px-3 py-2 ">
          View All Products <FaArrowRight />{" "}
        </button>
      </div>

      {/* Bottom-right rotating shape */}
      <div className="position-absolute bottom-0 end-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>
    </section>
  );
};

export default Pricing;
