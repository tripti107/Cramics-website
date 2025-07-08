import React from "react";
import "./Product.css";

import shop2 from "../Assets/shop2.webp";
import shop3 from "../Assets/shop3.webp";
import shop4 from "../Assets/shop4.jpg";
import shop5 from "../Assets/shop5.jpg";
import shop6 from "../Assets/shop6.webp";
import shop7 from "../Assets/shop7.webp";

const products = [
  { image: shop2, title: "Workshops for companies", price: "230 USD" },
  { image: shop3, title: "Workshops for adults", price: "210 USD" },
  { image: shop4, title: "Workshops for children", price: "200 USD" },
  { image: shop5, title: "Online workshops", price: "150 USD" },
  { image: shop6, title: "Set of Containers", price: "100 USD" },
  { image: shop7, title: "Star Set", price: "80 USD" },
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
