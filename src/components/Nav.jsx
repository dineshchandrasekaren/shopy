import React from "react";
import { IoDiamondOutline as Logo } from "react-icons/io5";

import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav
      style={{
        marginBottom: "2rem",
        width: "100%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Logo className="link" size={40} onClick={() => navigate("/")} />
        <NavLink className="link" to={`/product`}>
          Product
        </NavLink>
      </div>

      <div
        onClick={() => {
          navigate("/cart");
        }}
        className="link"
        style={{ width: "2rem" }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://raw.githubusercontent.com/dineshchandrasekaren/personal-website/338dba55dfbad731800af91761496a564bccd187/cart.svg"
          alt="this is cart "
        />
        <p
          className="center-absolute"
          style={{ fontSize: "80%", marginTop: "8%" }}
        >
          1
        </p>
      </div>
    </nav>
  );
};

export default Nav;
