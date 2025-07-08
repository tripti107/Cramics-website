import React from "react";
import "./Class.module.css";

import shop8 from "../Assets/shop8.webp";
import shop9 from "../Assets/shop9.webp";
import shop10 from "../Assets/shop10.png";
import shop11 from "../Assets/shop11.webp";

const products = [
  {
    image: shop8,
    title: "Nordic Container",
    price: "50 USD",
  },
  {
    image: shop9,
    title: "Silver Set",
    price: "40 USD",
  },
  {
    image: shop10,
    title: "Moon Plate",
    price: "30 USD",
  },
  {
    image: shop11,
    title: "Sara Mug",
    price: "20 USD",
  },
];

const ProductGrid = () => {
  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
