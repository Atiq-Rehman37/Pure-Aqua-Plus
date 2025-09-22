import React, { useEffect } from "react";
import Form from "../components/Form";
const contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Pure Aqua Plus";
  }, []);
  return (
    <div>
      <Form />
    </div>
  );
};

export default contact;
