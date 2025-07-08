import React from "react";
import "./NewCollection.css";
import ceramics from "./Assets/ceramics.webp";

const NewCollection = () => {
  return (
    <section className="new-collection">
      <div className="collection-text">
        <h2>New collection</h2>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec
          lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis
          urna orci.
        </p>
        <button className="btn">More</button>
      </div>
      <div className="collection-images">
        <div className="left-column">
          <div className="left-column img">
            <img src={ceramics} alt="product" />
          </div>
          <div className="left-column photo">
            <img src={ceramics} alt="product" />
          </div>
        </div>
        <div className="right-column">
          <div className="right-column img">
            <img src={ceramics} alt="product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
