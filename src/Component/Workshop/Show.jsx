import React from "react";
import "./Show.css";
import work3 from "../Assets/work3.jpg";

const Show = () => {
  return (
    <div className="show-container">
      <div className="show">
        <div className="show-text">
          <h2>Workshops for adults</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque dolor dolorem architecto labore ipsum deserunt saepe aut,
            quis nostrum excepturi placeat enim, facere cumque nulla nemo eum
            consequuntur culpa veniam aliquid voluptatem recusandae laboriosam
            beatae cupiditate! Quo, quia officia. Voluptas ratione fugiat hic
            minus voluptatem velit accusamus culpa alias!
          </p>
          <div className="show-buttons">
            <button className="subscribe-btn">Subscribe</button>
            <button className="showmore-btn">Show more</button>
          </div>
        </div>
        <div className="show-image">
          <img src={work3} alt="Adult workshop" />
        </div>
      </div>
    </div>
  );
};

export default Show;
