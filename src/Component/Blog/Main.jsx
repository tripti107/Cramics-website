import React from "react";
import "./Main.css";
import blog3 from "../Assets/blog3.webp";
import blog6 from "../Assets/blog6.webp";
import blog5 from "../Assets/blog5.webp";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Main = () => {
  return (
    <main className="main-section">
      <section className="blog-posts">
        <div className="blog-card">
          <img src={blog3} alt="Ceramic 1" />
          <div className="blog-content">
            <h2>What affects the quality of ceramic products?</h2>
            <p className="date">17 August 2022</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Phasellus suscipit...
            </p>
            <a href="#" className="read-more">
              Czytaj więcej
            </a>
          </div>
        </div>

        <div className="blog-card">
          <img src={blog6} alt="Ceramic 2" />
          <div className="blog-content">
            <h2>How ceramics are made</h2>
            <p className="date">17 August 2022</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Phasellus suscipit...
            </p>
          </div>
        </div>
      </section>

      <aside className="sidebar">
        <div className="social-media">
          <img src={blog5} alt="Pottery Decor" />
          <p className="social-title">Our social media</p>
          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form>
            <label>First name:</label>
            <input type="text" placeholder="Emily" />
            <label>Your e-mail:</label>
            <input type="email" placeholder="your@email.pl" />
            <label>Message:</label>
            <textarea placeholder="Write your message..."></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </aside>
    </main>
  );
};

export default Main;
