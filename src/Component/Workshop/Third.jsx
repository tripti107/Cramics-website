import React from "react";
import "./Third.css";
import work4 from "../Assets/work4.png";

const Third = () => {
  return (
    <div className="section">
      <div className="child">
        <div className="section__image">
          <img src={work4} alt="Workshop for children" />
        </div>
        <div className="section__content">
          <h2>Workshops for children</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            elementum sapien ac sapien vestibulum posuere. Praesent congue dui
            nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
            Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
            imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur
            egestas sed nisl rhoncus finibus.
          </p>
          <div className="section__buttons">
            <button className="btn subscribe">Subscribe</button>
            <button className="btn show-more">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
