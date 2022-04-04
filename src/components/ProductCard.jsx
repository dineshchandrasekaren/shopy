import React, { useContext } from "react";
import Rating from "./Rating";
import Store from "../context/Context";
import "./ProductCard.css";
const ProductCard = ({ id, imageUrl, name, price, rating }) => {
  let store = useContext(Store);
  let addCart = (id) => {
    store.isAdded(id, true);
  };
  return (
    <div>
      <div className="image_container">
        <button onClick={() => addCart(id)} className="cart_button">
          Add to Cart
        </button>
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
        <Rating key={name} rating={rating} />
      </div>
    </div>
  );
};

export default ProductCard;
