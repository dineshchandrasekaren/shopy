import React, { useState } from "react";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import Rating from "./Rating";
import "./CartItem.css";
const CartItem = ({ imageUrl, id, name, price, rating }) => {
  let [quantity, setQuantity] = useState(1);

  return (
    <div className="cart_container">
      <div className="cart_image_container">
        <img className="cart_image" src={imageUrl} alt={name} />
      </div>
      <div
        style={{
          width: "450px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginRight: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{name}</h3>
          <p style={{ fontWeight: 700 }}>$ {price}</p>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.6rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              padding: "20px",
              paddingLeft: 0,
            }}
            onClick={() => setQuantity(quantity >= 1 ? quantity-- : 1)}
          >
            <MdOutlineArrowBackIosNew
              onClick={() => setQuantity(quantity >= 1 ? quantity-- : 1)}
              size={25}
            />
          </div>
          <p>{quantity}</p>
          <div
            style={{ cursor: "pointer", padding: "20px" }}
            onClick={() => setQuantity(quantity++)}
          >
            <MdOutlineArrowForwardIos
              onClick={() => setQuantity(quantity++)}
              size={25}
            />
          </div>
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default CartItem;
