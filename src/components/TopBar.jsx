import Marquee from "react-fast-marquee";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-color2 text-dark py-3">
      <Marquee gradient={false} speed={50}>
        <span className="mx-5 flex items-center">
          <FaTruck className="mr-2 text-color1" size={20} /> 24/7 Delivery
          Service
        </span>
        <span className="mx-5 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-color1" size={20} />
          Street 5, Madni Mohallah, Chak Jalal Din, Girja Road, Rawalpindi
        </span>

        <span className="mx-5 flex items-center">
          <FaPhoneAlt className="mr-2 text-color1" size={20} /> +92 335 5581089
        </span>
        <span className="mx-5 flex items-center">
          <FaEnvelope className="mr-2 text-color1" size={20} />{" "}
          Jsaad8357@gmail.com
        </span>
      </Marquee>
    </div>
  );
};

export default TopBar;
