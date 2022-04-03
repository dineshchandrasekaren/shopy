import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Provider from "./context/Provider";

const App = () => {
  return (
    <div className="container">
      <Provider>
        <Nav />
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="/" element={<Navigate replace to="/product" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
