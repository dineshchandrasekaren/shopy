import React from "react";
import CartItem from "./CartItem";
import DATA from "../data";
const Cart = () => {
  return (
    <div>
      {DATA.map((items) => (
        <CartItem key={items.id} {...items} />
      ))}
    </div>
  );
};

export default Cart;
