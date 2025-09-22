import React, { useEffect } from "react";
import Shop from "../components/AllProducts/shop";
const shope = () => {
  useEffect(() => {
    document.title = "Shop - Pure Aqua Plus";
  }, []);
  return (
    <div>
      <Shop />
    </div>
  );
};

export default shope;
