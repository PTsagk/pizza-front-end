import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-bar">
      <h1>LOGO</h1>
      <div className="nav-links">
        <Link to={"/homepage"}>Home</Link>
        <Link to={"/pizzaspage"}>Pizza</Link>
        <Link to={"/drinkspage"}>Drinks</Link>
        <Link to={"/dessertspage"}>Desserts</Link>
      </div>
      <div className="cart-and-profile">
        <div className="cart">
          <FaShoppingCart></FaShoppingCart>
        </div>
        <div className="profile-icon">
          <RiAccountCircleFill></RiAccountCircleFill>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
