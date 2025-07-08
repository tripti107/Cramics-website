import React from "react";
import "./Fourth.css";
import work5 from "../Assets/work5.webp";

const Fourth = () => {
  return (
    <div className="fourth-section">
      <div className="fourth">
        <div className="fourth-content">
          <h2>Workshops for companies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            elementum sapien ac sapien vestibulum posuere. Praesent congue dui
            nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
            Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
            imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur
            egestas sed nisl rhoncus finibus.
          </p>
          <div className="buttons">
            <button className="btn subscribe">Subscribe</button>
            <button className="btn show-more">Show more</button>
          </div>
        </div>
        <div className="fourth-image">
          <img src={work5} alt="Workshop for companies" />
        </div>
      </div>
    </div>
  );
};

export default Fourth;
