import React from "react";
import DATA from "../data";
import ProductCard from "./ProductCard";
import "./Products.css";
const Products = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "left",
          margin: "0 0 1% 1%",
          fontSize: "2rem",
        }}
      >
        SHOES
      </h1>
      <div className="product">
        {DATA.map((items) => (
          <ProductCard key={items.id} {...items} />
        ))}
      </div>
    </>
  );
};

export default Products;
