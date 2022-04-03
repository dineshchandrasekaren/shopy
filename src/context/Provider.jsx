import React, { useState } from "react";
import DATA from "../data";
import Context from "./Context";

const Provider = (props) => {
  let Store = Context();
  let [product, setProduct] = useState({ items: [...DATA], cart: [] });
  return (
    <Store.Provider
      value={{
        product,
        isAdded: (id, value) => {
          let temp = product.items;
          temp.forEach((item) =>
            item.id === id ? (item.isAdded = value) : (item.isAdded = false)
          );
          setProduct({ ...product, items: [...temp] });
        },
        addToCart: (id) => {
          let [getData] = product.items.filter((item) => item.id === id);
          setProduct({
            ...product,
            cart: [
              ...product.cart,
              { ...getData, id: product.cart.length + 1, quantity: 1 },
            ],
          });
        },
        setQuantity: (id, value) => {
          let temp = product.cart;
          temp.forEach((item) => (item.id === id ? value : item.quantity));
          setProduct({ ...product, cart: [...temp] });
        },
        removeFromCart: (id) => {
          let [getData] = product.cart.filter((item) => item.id !== id);
          setProduct({
            ...product,
            cart: [...product.cart, ...getData],
          });
        },
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default Provider;
