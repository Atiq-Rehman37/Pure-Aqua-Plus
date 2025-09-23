import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center bg-light"
      style={{ height: "70vh" }}
    >
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-info text-white px-4 py-2">
        <FaHome className="me-2" /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
