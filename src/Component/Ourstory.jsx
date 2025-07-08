import React from "react";
import "./Ourstory.css";
import history from "./Assets/history.webp";

const OurStory = () => {
  return (
    <section
      className="our-story"
      style={{ backgroundImage: `url(${history})` }}
    >
      <div className="story-overlay">
        <h2 className="heading">Our story</h2>
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            elementum sapien ac sapien vestibulum posuere. Praesent congue dui
            nec lectus tincidunt elementum. Donec viverra a neque vel egestas...
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
