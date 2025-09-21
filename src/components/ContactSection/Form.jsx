import React, { useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Form = () => {
  const form = useRef();

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5735cl5", // replace with EmailJS service ID
        "template_1abyyqu", // replace with EmailJS template ID
        form.current,
        "84P7C8mHeTZpVtJmg" // replace with EmailJS public key
      )
      .then(
        () => {
          MySwal.fire({
            title: "✅ Message Sent!",
            text: "Thank you for contacting us. We’ll get back to you soon.",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.current.reset(); // reset form after success
        },
        (error) => {
          MySwal.fire({
            title: "❌ Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      );
  };

  return (
    <section className="contact-section text-center py-4 bg-color2 position-relative overflow-hidden">
      {/* Top-left rotating shape */}
      <div className="position-absolute top-0 start-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>

      <div className="container py-5">
        <p className="text-info fw-bold fs-4">| Get in Touch |</p>
        <h2 className="fw-bold mb-2">Have Questions? Talk to Us</h2>
        <p className="text-muted mb-5">
          If you have any questions, need assistance with your order, or want to
          learn more about our products, feel free to reach out to us. Our
          customer support team is always ready to help.
        </p>
        <div className="row g-4 align-items-stretch">
          {/* Left - Form */}
          <div className="col-md-6 d-flex">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-4 shadow-sm rounded bg-white text-start w-100 d-flex flex-column"
            >
              <div className="row g-3 flex-grow-1">
                <div className="col-md-6">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="user_phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="user_subject"
                    className="form-control"
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Your Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    className="form-control"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-start mt-3">
                <input
                  type="submit"
                  className="btn btn-submit text-white px-4"
                  value="Submit"
                />
              </div>
            </form>
          </div>

          {/* Right - Location */}
          <div className="col-md-6 d-flex">
            <div className="p-2 shadow-sm rounded bg-white w-100 d-flex flex-column">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323.866146104848!2d73.01500932440825!3d33.58282449237332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbaraf%20khana%20chowk%20misrial%20road%20rawalpindi!5e0!3m2!1sen!2s!4v1758437833666!5m2!1sen!2s"
                width="100%"
                title="Google Map"
                className="flex-grow-1 rounded"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right rotating shape */}
      <div className="position-absolute bottom-0 end-0">
        <img src={"/images/shape.png"} alt="shape" className="shape-img" />
      </div>
    </section>
  );
};

export default Form;
