import React from "react";
import Rating from "./Rating";
import "./ProductCard.css";
const ProductCard = ({ imageUrl, name, price, rating }) => {
  return (
    <div>
      <div className="image_container">
        <button className="cart_button">Add to Cart</button>
        <img
          src={imageUrl}
          style={{ width: "100%", height: "100%" }}
          alt={name}
        />
      </div>
      <div>
        <span
          style={{
            display: "flex",
            margin: "2px 0 4px 0",
            justifyContent: "space-between",
          }}
        >
          <span>{name}</span>
          <p style={{ fontWeight: 500 }}>$ {price}</p>
        </span>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default ProductCard;
