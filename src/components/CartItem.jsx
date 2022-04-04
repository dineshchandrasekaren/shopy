import React, { useState } from "react";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import Rating from "./Rating";
import "./CartItem.css";
const CartItem = ({
  getQuantity,
  imageUrl,
  id,
  name,
  price,
  rating,
  quantity,
  total,
}) => {
  let quan = 1;

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
          <p style={{ fontWeight: 700 }}>$ {total}</p>
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
            onClick={() => {
              if (!quantity <= 0) {
                quan = quantity--;
                getQuantity(id, quan);
              }
            }}
            style={{
              cursor: "pointer",
              padding: "20px",
              paddingLeft: 0,
            }}
          >
            <MdOutlineArrowBackIosNew
              onClick={() => {
                if (!quantity <= 0) {
                  quan = quantity--;
                  getQuantity(id, quan);
                }
              }}
              size={25}
            />
          </div>
          <p>{quantity}</p>
          <div
            onClick={() => {
              quan = quantity++;
              getQuantity(id, quan);
            }}
            style={{ cursor: "pointer", padding: "20px" }}
          >
            <MdOutlineArrowForwardIos
              onClick={() => {
                quan = quantity++;
                getQuantity(id, quan);
              }}
              size={25}
            />
          </div>
        </div>
        <Rating key={id} rating={rating} />
      </div>
    </div>
  );
};

export default CartItem;
