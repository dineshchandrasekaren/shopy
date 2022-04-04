import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import Store from "../context/Context";
const Cart = () => {
  let store = useContext(Store);
  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);
  useEffect(
    () =>
      store.product.items.forEach((item) => {
        setCart((preV) => [
          ...preV,
          { ...item, quantity: 1, total: item.price },
        ]);
      }),
    []
  );
  const changeQuantity = (id, value) => {
    const temp = cart;
    temp.forEach((item) => {
      if (item.id === id) {
        item.quantity = value;
        item.total = item.price * item.quantity;
      }
    });

    setCart([...temp]);
  };
  return (
    <div>
      {cart.map((items) => (
        <CartItem getQuantity={changeQuantity} key={items.id} {...items} />
      ))}
      {/* <div className="total">
        <h3>Total</h3>
        <p style={{ fontWeight: 700 }}>$ {total}</p>
      </div> */}
    </div>
  );
};

export default Cart;
