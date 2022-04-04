import React from "react";
import Store from "../context/Context";
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
        <Store.Consumer>
          {(store) =>
            store.product.items.map((items) => (
              <ProductCard key={items.id} {...items} />
            ))
          }
        </Store.Consumer>
      </div>
    </>
  );
};

export default Products;
