import React from "react";
import "./Employees.css";
import marry from "./Assets/marry.jpg";
import james from "./Assets/james.jpg";
import emily from "./Assets/emily.jpg";

const Employees = () => {
  return (
    <section className="employees-section">
      <h2>Our employees</h2>
      <div className="employee-cards">
        <div className="employee">
          <img src={marry} alt="Mary Smith" />
          <h3>Mary Smith</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="employee">
          <img src={james} alt="James Jones" />
          <h3>James Jones</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="employee">
          <img src={emily} alt="Emily Murphy" />
          <h3>Emily Murphy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </section>
  );
};

export default Employees;
