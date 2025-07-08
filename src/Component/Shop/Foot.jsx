import React from "react";
import "./Foot.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>02–233 Warszawa</p>
          <p>Al. Jerozolimskie 12</p>
        </div>
        <div className="footer-column">
          <p>email@contact.com</p>
          <p>+48 500 500 500</p>
        </div>
        <div className="footer-column">
          <p>Store Regulations</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer-column">
          <p>Delivery</p>
          <p>Returns & exchanges</p>
        </div>
        <div className="footer-socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Website created in white label responsive website builder{" "}
          <span>WebWave</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
