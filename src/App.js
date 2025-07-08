import React from "react";
import "./App.css";
import logo from "./logo.png";
import Bestsellers from "./Component/Bestseller";
import { Routes, Route, Link } from "react-router-dom";
import NewCollection from "./Component/NewCollection";
import Workshops from "./Component/Workshop/Workshop";
import Employees from "./Component/Employees";
import Image from "./Component/Image";
import OurStory from "./Component/Ourstory";
import Footer from "./Component/Workshop/Footer";
import Blog from "./Component/Blog/Blog";
import Class from "./Component/Shop/Class";
import Contact from "./Component/Contact/Contact";
import Container from "./Component/Blog/Container";
import Down from "./Component/Down";
import Font from "./Component/Blog/Font";
import Main from "./Component/Blog/Main";
// import Footer from "./Component/Shop/Foot";
import Fourth from "./Component/Workshop/Fourth";
import Hero from "./Component/Workshop/Hero";
import Lower from "./Component/Contact/Lower";
import Product from "./Component/Shop/Product";
import Shop from "./Component/Shop/Shop";
import Show from "./Component/Workshop/Show";
import Third from "./Component/Workshop/Third";
import Workshop from "./Component/Workshop/Workshop";

const AppLayout = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand"></span>
        </div>
        <nav className="nav-links">
          <Link to="/shop">SHOP</Link>
          <Link to="/workshop">WORKSHOP</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
          <a href="#" className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </nav>
      </header>

      {/* <section className="hero">
        <div className="hero-content">
          <h1>Ceramics studio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            massa, dapibus quis molestie sit amet, pharetra vitae dolor...
          </p>
          <button>Show More</button>
        </div>
      </section> */}
    </>
  );
};

const App = () => {
  return (
    <>
      <AppLayout />
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <Shop /> <Product />
              <Product /> <Footer />
            </>
          }
        />
        <Route
          path="/workshop"
          element={
            <>
              <Workshop /> <Fourth /> <Hero /> <Show /> <Third /> <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Container /> <Main /> <Blog /> <Font />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact /> <Lower />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Bestsellers /> <NewCollection /> <OurStory /> <Image />{" "}
              <Employees /> <Down />{" "}
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
