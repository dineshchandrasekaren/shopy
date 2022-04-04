import React, { useState } from "react";
import DATA from "../data";
import Store from "./Context";

const Provider = (props) => {
  let [product, setProduct] = useState({ items: [...DATA], cart: [{}] });
  return (
    <Store.Provider
      value={{
        product,
        addToCart: (id) => {
          let cart = [];
          cart.join(product.items.filter((item) => item.id === id));
          setProduct((preV) => {
            return { ...preV, cart };
          });
        },
        isAdded: (id, value) => {
          let temp = product.items;
          temp.forEach((item) => item.id === id && (item.isAdded = value));
          setProduct({ ...product, items: [...temp] });
        },
        removeFromCart: (id) => {
          let getData = product.cart.filter((item) => item.id !== id);
          setProduct({
            ...product,
            cart: [...getData],
          });
        },
        setProduct,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default Provider;
