import React from "react";
import "./Image.css";
import image1 from "./Assets/image1.webp"; // Large left image
import image2 from "./Assets/image2.webp"; // Top right
import image3 from "./Assets/image3.webp"; // Bottom left
import image4 from "./Assets/image4.webp"; // Bottom right

const PotteryGallery = () => {
  return (
    <section className="pottery-gallery">
      <div className="left-big">
        <img src={image1} alt="Pottery 1" />
      </div>
      <div className="right-grid">
        <div className="top">
          <img src={image2} alt="Pottery 2" />
        </div>
        <div className="bottom">
          <img src={image3} alt="Pottery 3" />
          <img src={image4} alt="Pottery 4" />
        </div>
      </div>
    </section>
  );
};

export default PotteryGallery;
