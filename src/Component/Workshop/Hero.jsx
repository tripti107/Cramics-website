import React from "react";
import "./Hero.css";
import work2 from "../Assets/work2.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="white">
        <div className="hero-image">
          <img src={work2} alt="Pouring drink" />
        </div>
        <div className="hero-content">
          <h2>Online workshops</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            elementum sapien ac sapien vestibulum posuere. Praesent congue dui
            nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
            Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
            imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur
            egestas sed nisl rhoncus finibus.
          </p>
          <div className="hero-buttons">
            <button className="subscribe-btn">Subscribe</button>
            <button className="show-btn">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
