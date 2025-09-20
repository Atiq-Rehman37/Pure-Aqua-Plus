import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaFilter } from "react-icons/fa";
import "./shop.css";

const Shop = () => {
  const initialProducts = [
    { image: "/images/12liter.jpg", title: "12 Liter Bottle", price: 280 },
    { image: "/images/500ml.png", title: "500ml Bottle", price: 40 },
    { image: "/images/6litre.png", title: "6 Liter Bottle", price: 180 },
    { image: "/images/1500ml.png", title: "1500ml Bottle", price: 80 },
    {
      image: "/images/bottle-holder.jpg",
      title: "19 Liter Bottle Holder",
      price: 500,
    },
    {
      image: "/images/non-electric-dispenser.jpg",
      title: "Non-Electric Dispenser",
      price: 1200,
    },
    { image: "/images/Tap&Stand.jpg", title: "Tap & Stand", price: 800 },
    { image: "/images/WaterPump.jpg", title: "Water Pump", price: 1200 },
    { image: "/images/19-litre.png", title: "19 Liter Bottle", price: 200 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState(""); // "low" or "high"
  const whatsappNumber = "+923355581089";

  // Sort products whenever sortOrder changes
  useEffect(() => {
    let sortedProducts = [...initialProducts];
    if (sortOrder === "low") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  }, [sortOrder]);

  return (
    <section className="features-section text-center py-5 bg-color2 position-relative overflow-hidden">
      <div className="container py-5">
        <p className="text-info fw-bold fs-4">
          | <span>Our Products</span> |
        </p>
        <h2 className="fw-bold mb-3">We Deliver Best Quality Bottle Packs.</h2>

        {/* Total Products + Sort Dropdown */}
        <div className="row mb-4 align-items-center border pt-3 pb-3">
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
            {/* Left: Total Products */}
            <strong>Total Products: {products.length}</strong>

            {/* Right: Filter + Select */}
            <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
              <FaFilter size={20} className="text-info" />
              <select
                className="form-select w-auto custom-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Sort by Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="shadow-sm rounded bg-white h-100 d-flex flex-column justify-content-between align-items-center p-4"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid mb-3 rounded product-img"
                />
                <div className="p-3">
                  <h5 className="fw-bold">{product.title}</h5>
                  <h6 className="text-info my-3">
                    Price: {product.price}/- PKR
                  </h6>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello! I want to order ${product.title} for ${product.price} PKR.`}
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
      </div>
    </section>
  );
};

export default Shop;
