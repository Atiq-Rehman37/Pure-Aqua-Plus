import React from "react";

const AboutSection = () => {
  const Team = [
    {
      img: "/images/Director.jpg",
      name: "Raja Shahid Mahmood",
      title: "Director",
    },
    {
      img: "/images/CEO.jpg",
      name: "Saad Jamil",
      title: "CEO",
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

      <div className="container py-5">
        <p className="text-info fw-bold fs-4">| About Us |</p>
        <h2 className="fw-bold mb-5">Pure Aqua Plus & Team</h2>
        <div className="row">
          {/* {Team.map((feature, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="feature-card p-4 shadow-sm rounded bg-white h-100 py-5">
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <div className="container py-5">
        <p className="text-info fw-bold fs-4">|Our Team |</p>
        <h2 className="fw-bold mb-5">Pure Aqua Plus & Team</h2>
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
