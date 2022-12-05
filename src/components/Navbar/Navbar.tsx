import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar z-50">
      <h1>LOGO</h1>
      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/pizzas"}>Pizzas</Link>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/desserts"}>Desserts</Link>
      </div>
      <div className="cart-and-profile">
        <Link to={"/cart"} className="cart">
          <FaShoppingCart></FaShoppingCart>
        </Link>
        <Link to={"/profile"} className="profile-icon">
          <RiAccountCircleFill></RiAccountCircleFill>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
