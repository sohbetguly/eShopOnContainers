import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const specifications = useSelector((state) => state.cart.specifications);
  const keys = Object.keys(specifications);
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <section className="accordion bg-gradient">
      {keys.map((key, index) => (
        <div key={key} className="tab">
          <input
            type="checkbox"
            onChange={(event) => {
              console.log(event.target.checked)
            }}
            checked
            name="accordion-1"
            id={key}
          />
          <label
            htmlFor={key}
            className={`tab__label bg-gradient ${
              index === 0 ? "border-top-none" : ""
            }`}
          >
            {key}
          </label>
          <div className="tab__content py-2">
            {specifications[key].map((detail, index) => {
              return (
                <label className="bg-gradient cursor-pointer" key={detail} htmlFor={detail}>
                  <input type="checkbox" name={detail} id={detail} />
                  <h6 className="text-uppercase">{detail}</h6>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
