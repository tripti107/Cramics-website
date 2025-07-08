import React from "react";
import "./Blog.css";
import blog1 from "../Assets/blog1.webp";
import blog3 from "../Assets/blog3.webp";
import blog6 from "../Assets/blog6.webp";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="grid-card">
          <img src={blog1} alt="Soup Bowls" />
          <div className="head">
            <h3>Ceramic soup bowls</h3>
          </div>
          <p className="date">17 August 2022</p>
          <p>Nullam maximus vestibulum lectus tempus aliquet.</p>
          <a href="#" className="read-more">
            Czytaj więcej
          </a>
        </div>

        <div className="grid-card">
          <img src={blog3} alt="Quality" />
          <div className="head">
            <h3>What affects the quality ceramic products?</h3>
          </div>
          <p className="date">17 August 2022</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <a href="#" className="read-more">
            Czytaj więcej
          </a>
        </div>

        <div className="grid-card">
          <img src={blog6} alt="Made" />
          <div className="head">
            <h3>How ceramics are made</h3>
          </div>
          <p className="date">17 August 2022</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <a href="#" className="read-more">
            Czytaj więcej
          </a>
        </div>
      </div>
      <div className="pagination">
        <span>&lsaquo;</span>
        <span className="current-page">1</span>
        <span>2</span>
        <span>&rsaquo;</span>
      </div>
    </>
  );
};

export default Blog;
