import React from "react";
import "./Bestseller.css";
import moonPlate from "./Assets/bowl.jpg.webp";
import silverSet from "./Assets/glass.jpg.webp";
import workshop from "./Assets/product.jpg.webp";
import sonu from "./Assets/sonu.png.webp";

const products = [
  {
    name: "Sara Mug",
    price: "20 USD",
    image: sonu,
  },
  {
    name: "Moon Plate",
    price: "30 USD",
    image: moonPlate,
  },
  {
    name: "Silver Set",
    price: "40 USD",
    image: silverSet,
  },
  {
    name: "Workshops for adults",
    price: "210 USD",
    image: workshop,
  },
];

const Bestsellers = () => {
  return (
    <section style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "30px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Bestsellers
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ fontSize: "1.1rem", margin: "10px 0 5px" }}>
              {product.name}
            </h3>
            <p style={{ color: "#555", margin: 0 }}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
